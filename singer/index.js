const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const port = 3000;
app.listen(port, ( ) => {console.log('Server for app Singer is started')})

class Singer {
    constructor (id, name, link, image) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.image = image;
    }
    getInfo() {
        let info = [];
        return info = [this.id, this.name, this.link, this.image]
    }
}

let Karik = new Singer(1, 'Karik', 'https://zingmp3.vn/nghe-si/Karik', 'https://avatar-nct.nixcdn.com/singer/avatar/2017/05/19/e/7/4/2/1495165872455_600.jpg' )

app.get('/list', (req, res) => {
    const Info = Karik.getInfo();
    console.log(Info)
    res.render('list')
})