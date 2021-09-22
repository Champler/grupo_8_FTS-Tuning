const { production } = require("../config/config")

module.exports = (sequelize, DataTypes) => {
    let alias = 'Product'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull:false 
        },
        description: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        carModel: {
            type: DataTypes.STRING(40),
            allowNull:false
        },
        brand: {
            type: DataTypes.STRING(40),
            allowNull:false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        color: {
            type: DataTypes.STRING(25),
            allowNull:false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        discount: {
            type: DataTypes.INTEGER 
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        category_id: {
            type:DataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        })
        Product.hasMany(models.Image, {
            as: 'images'
        })
        Product.belongsToMany(models.CartDetail, {
            as: 'cartDetail'
        })
    }
}