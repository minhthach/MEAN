const express = require('express');
const app = express();
app.set('view engine','ejs')
app.use(express.static('public'))

const port = 3000;
app.listen(port, () => console.log(`Server started`))

app.get('/showhinh', (req, res) => {
    res.render('index')
})
