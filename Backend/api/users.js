const express = require('express');
const router = express.Router();

const usersList = []


router.get('/', (req, res) => {
    res.json(usersList)
})

router.post('/users', (req, res) => {
    const newUser = req.body
    usersList.push(usersList)
    res.send('Usuário cadastrado com sucesso!')
})

module.exports = router