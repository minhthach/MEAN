const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const flash = require('express-flash-messages');
const session = require('express-session');
const SingerSchema = require('./models/singer');

const app = express();

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

const port =  3000 // process.env.PORT ||
app.listen(port, () => console.log('App server is started!'));

// Connect database
mongoose.connect('mongodb://localhost:27017/singerdb', {
    useNewUrlParser: true,
    useCreateIndex: true
})
mongoose.connection
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err.message))

// Upload file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

// Filter image
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
        return cb(new Error('File not allowed!'))
    }
    cb(null, true)
}
const upload = multer({ storage, fileFilter, limits: { fileSize: 102400 } })

// Session
app.use(session({
    secret: 'a123456', // Khóa bí mật
    resave: false,
    saveUninitialized: true,
}))

app.use(flash())
app.use((req, res, next) => {

})

// add collection Singer
const Singer = mongoose.model('singerdb', SingerSchema)

app.get('/list', (req, res) => {
    Singer.find()
        .then(singers => res.render('list', { singers }))
        .catch((err) => console.log(err.message))
})

app.get('/', (req, res) => {
    res.redirect('/list')
})

app.get('/add', (req, res) => {
    res.render('add')
})

app.post('/add-singer', (req, res) => {
    upload.single('avatar')(req, res, (err) => {
        if (err) {
            return res.send(err.message)
        }
        const data = req.body
        Singer.create({
            name: data.name,
            link: data.link,
            gender: data.gender,
            avatar: req.file.filename
        })
            .then(() => {
                res.redirect('/list')
            })
            .catch(() => {
                e => console.log(e.message)
            })
    })

})

app.get('/update/:id', (req, res) => {
    const _id = req.params.id
    Singer.findById(_id)
        .then(singers => res.render('update', { singers }))
        .catch((err) => console.log(err.message))
})

app.post('/update-singer', (req, res) => {
    upload.single('avatar')(req, res, (err) => {
        if (err) {
            return res.send(err.message)
        }
        const data = req.body
        Singer.findById(data._id).update({
            name: data.name,
            link: data.link,
            avatar: req.file.filename
        })
    })
    .then( () => res.redirect('/list') )
    .catch((err) => res.send(err.message))

})

app.get('/remove/:id', (req, res) => {
    const _id = req.params.id;
    Singer.findByIdAndDelete(_id)
        .then((singer) => {
            if (!singer) {

                console.log('Not found')
            } else {
                console.log(singer)
            }
        })
        .catch((err) => res.send(err.message))
})