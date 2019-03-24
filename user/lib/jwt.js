// JSON WEB TOKEN. Mã hóa password. Không sử dụng để lưu password vì có thể mã hóa ngược lại

/**
 * secret key
 * time mã hóa
 * 
 */

const jwt = require('jsonwebtoken');
const SECRET_KEY = '270196'

function sign(object) {
    // return token
    return new Promise((resolve, reject) => {
        jwt.sign(object, SECRET_KEY, {expiresIn: 12000}, (err, encoded) => {
            if (err) return reject(err.message)
            return resolve(encoded)
        })
    })
}

function verify(token) {
    // return object
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, {expiresIn: 12000}, (err, obj) => {
            if (err) return reject(err.message)
            delete obj.exp;
            delete obj.iat;
            return resolve(obj)
        })
    })
}

module.exports = {sign, verify}