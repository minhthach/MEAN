const express = require('express')
const { hash, compare } = require('../lib/bcrypt');
const route = express.Router()
const UserModel = require('../model/User');
const { sign } = require('../lib/jwt');
const { checkLogin, redirectIfLoggedIn } = require('../lib/checkLogin')


route.get('/register', (req, res) => {
    res.render('register')
})

route.post('/register', (req, res) => {
    const { email, password, passwordConfirmation, fullname, gender, phone, birthdate } = req.body
    if (password !== passwordConfirmation) {
        req.flash('error_message', 'Password confirmation not match!')
        return res.redirect('/user/register')
    }
    // Import user into database
    hash(password)
        .then(hash => {
            return UserModel.create({
                email: email,
                password: hash,
                fullname: fullname,
                gender: gender,
                phone: phone,
                birthdate: birthdate
            })
        })
        .then(() => {
            return res.redirect('/user/login')
        })
        .catch((err) => {
            req.flash('error_message', 'Cannot register account')
            console.log(err.message)
            res.redirect('/user/register')
        })
})

route.get('/login', (req, res) => {
    res.render('login')
})

route.post('/login', redirectIfLoggedIn, (req, res) => {
    //find user by email
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                req.flash('error_message', 'Cannot find email!')
                return res.redirect('/user/login')
            } else {
                //compare password
                compare(password, user.password)
                    .then((check) => {
                        if (check) { // sign token
                            // Login success
                            return sign({ id: user._id }) // Có thể lấy tất cả dữ liệu, nhưng chỉ nên lấy _id
                        } else {
                            req.flash('error_message', 'Email or Password invalid!')
                            return res.redirect('/user/login')
                        }
                    })
                    .then(token => { // get token
                        // Lưu vào cookie
                        res.cookie('tokenUser', token, {maxAge: 900000}) //set maxAge sao cho cookie token hết hạn trước sau token
                        res.redirect('/home')
                    })
                    .catch((err) => {
                        req.flash('error_message', `Something went wrong!`);
                        res.redirect('/user/login');
                    })
            }
        })
        .catch((err) => {
            console.log(err.message)
            req.flash('error_message', 'Cannot login');
            res.redirect('/user/login')
        })
})

route.get('/logout', checkLogin, (req, res) => {
    // const tokenUser = res.cookie.tokenUser
    // if(!tokenUser) return res.redirect('/user/login')
    res.clearCookie('tokenUser')
    res.redirect('/user/login')
})

module.exports = route