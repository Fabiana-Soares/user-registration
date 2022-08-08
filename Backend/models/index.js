const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Users = require('./users')
const Products = require('./products')

const users = Users(sequelize, Sequelize.DataTypes)
const products = Products(sequelize, Sequelize.DataTypes)

const db = {
    users,
    products,
    sequelize
}

module.exports = db
