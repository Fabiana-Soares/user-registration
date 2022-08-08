const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const productsList = []

router.get('/', (req, res) => {
    res.json(productsList)
})

router.post('/products', (req, res) => {
    const newProducts = req.body
    productsList.push(newProducts)
    
    res.send('Produto adicionado com sucesso!')
})

module.exports = router