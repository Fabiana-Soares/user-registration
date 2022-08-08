const express = require('express');

const usersRouter = require('./users')
const productsRouter = require('./products')

const router = express.Router();


router.get('/', (req, res) => {
    res.send('App online!')
})

router.use('/users', usersRouter)
router.use('/products', productsRouter)

module.exports = router