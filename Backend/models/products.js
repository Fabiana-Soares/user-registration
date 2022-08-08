const products = (sequelize, DataTypes) => {
    const Products = sequelize.define( 'Products', {
        name: {
            type: DataTypes.STRING
        },
        preco: {
            type: DataTypes.INTEGER  
        }, 
        
    }, {
        tableName: 'products'

    })

    return Products
}

module.exports = products