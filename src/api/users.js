const express = require('express');
const router = express.Router()

const User = require('../models/user');

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const { name, ucapan } = req.body;
    const newUser = new User({
        name: name, ucapan: ucapan
    })
    newUser.save()
        .then(() => res.json({
            message: "Ucapan Telah Terkirim"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Terjadi Error Pada Pengiriman Pesan"
        }))
})
module.exports = router