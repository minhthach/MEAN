const express = require('express');
const ejs = require('ejs');
const app = express();
//const port = 3000;
//Lấy port bất kỳ còn trống trên server
const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     res.send({
//         name: 'Teo',
//         height: 190
//     })
// })

// // Lấy tham số từ trang web
// app.get('/user/:id', (req, res) => {
//     const id = req.params;
//     res.send({id})
//  })

// app.get('/views', (req, res) => {
//     console.log(__dirname)
//     res.sendFile(__dirname + '/views/index.html')
// })

app.listen(port, () => console.log(`Server started on port ${port}`))

// Bài tập: 

class Calculate {
    constructor (a, dau, b) {
        this.a = a;
        this.b = b;
        this.dau = dau
    }
    getResult () {
        if(this.dau == 'cong'){
           return this.a + this.b
        }
        if (this.dau == 'tru') {
            return this.a - this.b
        }
        if (this.dau == 'nhan') {
            return this.a*this.b
        }
        if (this.dau == 'chia') {
            return this.a/this.b
        }
    }
    // Cách khác: sử dụng hàm eval() - chuyển đổi các dấu thành các toán tử
    get doiDau () {
        if(this.dau == 'cong') return '+'
        if(this.dau == 'tru') return '-'
        if(this.dau == 'nhan') return '*'
        if(this.dau == 'chia') return '/'
    }
    tinhtoan () {
        const string = `${this.a} ${this.dau} ${this.b}`
        return `${string} = ${eval(string)}`
    }
}

app.get('/:a/:dau/:b', (req, res) => {
    const a = +req.params.a; // Dấu + để đổi parseInt - chuyển string thành số
    const dau = req.params.dau;
    const b = +req.params.b;
    // Cách khác lấy params
    // const {a, dau, b} = req.params
//    console.log(a)
    let newCal = new Calculate(a, dau, b).getResult()
    res.send({
        newCal
    })
})