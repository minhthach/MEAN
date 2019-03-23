const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/user', {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err.message)) 