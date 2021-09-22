module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }
    let config = {
        tableName: "cart",
        timestamps: true,
    }
    const Cart = sequelize.define(alias, cols, config); 

    Cart.associate = models => {
        Cart.belongsTo(model.User)
        Cart.belongsTo(model.Ticket)
        Cart.hasMany(models.cart_detail, {
            as: "cart_detail",
        })
    }
    return Cart
};