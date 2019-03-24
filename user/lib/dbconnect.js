const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://minhthach:tmt27011996@cluster0-wga8o.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err.message)) 