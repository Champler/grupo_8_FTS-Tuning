module.exports = (sequelize, DataTypes) => {
    alias = 'CartDetail'; 
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: 'cart_detail',
        timestamps: false
    }

    const CartDetail = sequelize.define(alias, cols, config)

    CartDetail.associate = models => {
        CartDetail.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        })

        CartDetail.belongsTo(models.Cart, {
            as: 'cartDetail',
            foreignKey: 'cart_id'
        })
    }
}