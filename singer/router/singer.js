const express = require('express');
const { arrSinger, Singer, domainImg, domainLink } = require('../models/singer');

const router = express.Router();

router.get('/list', (req, res) => {
    res.render('list', { arrSinger, domainImg, domainLink })
})

// app.get('/update/:id', (req, res) => {
//     let id = req.params;
//     let newSinger = arrSinger[]
//     res.render('update')
// })

router.get('/add', (req, res) => {
    res.render('add')
})

router.post('/add-singer', (req, res) => {
    const { txtName, txtImage, txtLink } = req.body;
    const id = Math.floor(Math.random * 1000, 0);
    newSinger = new Singer(id, txtName, txtImage, txtLink)
    arrSinger.push(newSinger)
    res.redirect('/list')
    // res.send({
    //     txtName, txtImage, txtLink
    // })// Để dừng load route
})

module.exports = router