const users = (sequelize, DataTypes) => {
    const Users = sequelize.define( 'Users', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING   
        }, 
        passowrd: {
            type: DataTypes.STRING 
        }
    }, {
        tableName: 'users'

    })

    return Users
}

module.exports =users
