const bcrypt = require('bcrypt')

async function hash(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 8)
        .then( hash => resolve(hash))
        .catch( err => console.log(err.message) )
    } )
}

async function compare(password, hash) {
    const result = await bcrypt.compare(password, hash)
    return result
}

module.exports = {hash, compare}
