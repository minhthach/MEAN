const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const SingerSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    avatar: String,
    link: String,
    create_at: {
        type: Date,
        default: Date.now
    },
    gender: {
        type: String,
        default: 'Male'
    }
}) 

module.exports = SingerSchema;