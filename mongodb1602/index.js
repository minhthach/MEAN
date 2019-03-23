// Thêm thư viện MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean1602', {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err))

// Gọi collection user
const UserSchema = require('./models/user')
const user = mongoose.model('users', UserSchema)

const BlogSchema = require('./models/blog')
const blog = mongoose.model('blogs', BlogSchema)

// Thêm user
// user.create({
//     username: 'hjbfsndkfjadmin2ádasd',
//     password: '12345678765',
//     gender: 'female'
// })
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

// Thêm Blog

// const blog01 = new blog({
//     title: 'News 01',
//     author: '5c8caf5454378d1c086be0a1'
// })
// blog01.save()
//     .then((blog) => console.log(blog))
//     .catch((err) => console.log(err.message))

// Xóa user
// user.findByIdAndDelete('5c8caf5454378d1c086be0a2')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

// Thêm nhiều user
// user.insertMany([
//     {
//         username: 'admin5',
//         password: '12345678765',
//     },
//     {
//         username: 'user 6',
//         password: '12345678765',
//     },
//     {
//         username: 'user 7',
//         password: '12345678765',
//     },
//     {
//         username: 'user 8',
//         password: '12345678765',
//     },
// ])
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

/** Câu truy vấn
 * find: Tìm tất cả. Tham số đầu là điều kiện, ko có thì để {}, tham số thứ 2 là điều kiện cho kết quả
 * findById: Tìm theo id
 * findOne: Tìm được nhiều nhưng trả về 1
 */

// user.find({}, { username: 1, _id: 0 }) //trả về username ko có id
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

// user.find({ username: 'user1' }, { username: 1}) //Tìm username user1, trả về username và id
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

// user.findOne({ username: 'user1' }) //TÌm username user1, trả về full info
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

// SELECT * FROM users WHERE username LIKE '%admin%'
// user.find({
//     username: { $regex: /admin/ }
// })
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

// TÌM HIỂU REGEX

// SELECT * FROM users WHERE username LIKE 'admin%'
// user.find({
//     username: { $regex: /^admin/  }
// })
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

// SELECT * FROM users WHERE username LIKE '%admin'
// user.find({
//     username: { $regex: /admin$/  }
// })
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

// Toán tử:
/**
 * = : sử dụng dấu :
 * >= : gte (greater than equal) $gte: 12
 * <= : gt (greater than)
 */

// SELECT * FROM users WHERE id IN ('5c8caebf41f6ae0bcca768b2','5c8cb3b1b108d108e8177706')
// user.find({
//     _id: {
//         $in: ['5c8caebf41f6ae0bcca768b2', '5c8cb3b1b108d108e8177706']
//     }
// })
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

// Sort: truyền vào asc, desc hoặc 1, -1 hoặc ascending, descending
// user.find().sort({ username: -1 })
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

// Limit 0, 10 
// user.find().limit(3)
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

// 2,3: skip(position),limit(quantity) 
// user.find().skip(2).limit(3)
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err.message))

user.find({
    username: {
        $regex: /admin/
    }
}).updateMany({ password: 'aaaaaaaaaaaaaaa' })
    .then((user) => console.log(user))
    .catch((err) => console.log(err.message))
