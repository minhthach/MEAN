const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        refs: 'users'
    },
    content: String,
    create_at: {
        type: Date,
        default: Date.now()
    }
})

// const Blog = mongoose.model('blog', BlogSchema)

module.exports = BlogSchema;