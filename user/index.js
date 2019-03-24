const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./controller/user.route')
const homeRouter =require('./controller/home.route')
const cookieParser = require('cookie-parser');
require('./lib/dbconnect')

const flash = require('connect-flash'); //1
const session = require('express-session'); //4

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public') );

app.use(cookieParser());

app.use(session({ //5
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(flash())
app.use((req, res, next) => { //3
    res.locals.error_message = req.flash('error_message')
    next()
})

app.use('/user', userRouter); // Đặt route phía sau để route chạy sau khi chạy flash
app.use('/home', homeRouter);

app.listen(port, () => console.log('App server is running'))

