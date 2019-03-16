const mongoose = require('mongoose');
// Tạo Collection
const Schema = mongoose.Schema
const UserSchema = new Schema ({ // Cột id tự tạo, giá trị random
    username: {
        type: String, // Kiểu dữ liệu
        required: true, // Luôn luôn phải nhập
        unique: true // Đơn nhất
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        default: 'male'
    },
    address: String,
    avatar: String
})

//Database mean1602 sẽ được tạo tự động
// mongoose.model('user', UserSchema) // Khai báo thêm collection vào database đã kết nối. Tên collection là user. 

module.exports = UserSchema;