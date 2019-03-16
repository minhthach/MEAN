const express = require('express')
const multer = require('multer')

const app = express()
// const upload = multer({dest: './public/images'}) // Destination

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage: storage})

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.listen(3000)

app.get('/', (req, res) => {
    res.render('upload')
})

app.post('/upload', upload.single('avatar'), (req, res) => {
    const file = req.file;
    const input = req.body;
    res.send({
        file, input
    })
})