module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        rol: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(150),
        },
        telephone: {
            type: DataTypes.STRING(25),
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = models => {
        User.hasMany(models.Address, {
            as: "address",
            foreignKey: "user_id"
        })
        User.hasMany(models.Cart, {
            as: "cart",
            foreignKey: "user_id"
        })
    }
    return User
};