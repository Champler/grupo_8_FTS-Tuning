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
        address: {
            type: DataTypes.STRING(70),
            allowNull: true
        },
        cp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        province: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    }
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = models => {
        User.hasMany(models.Cart, {
            as: "cart",
            foreignKey: "userId"
        })
    }
    return User
};