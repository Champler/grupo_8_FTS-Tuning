module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(70),
            allowNull: false
        },
        rol: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(150),
        },
        telephone: {
            type: dataTypes.STRING(25),
        }
    }
    let config = {
        tableName: "users",
        timestamps: true,
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = models => {
        User.hasOne(models.Adress, {
            as: "address",
            foreignKey: "user_id"
        })
        User.hasOne(models.Cart, {
            as: "cart",
            foreignKey: "user_id"
        })
    }
    return User
};