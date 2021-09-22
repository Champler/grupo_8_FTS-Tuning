module.exports = (sequelize, DataTypes) => {
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
        Cart.belongsTo((models.User), {
            as:"user",
            foreingKey: "user_id"
        })
        Cart.belongsTo((models.Ticket), {
            as: "ticket",
            foreingKey: "cart_id"
        })
        Cart.hasMany(models.CartDetail, {
            as: "cartDetail",
            foreingKey: "cart_id"
        })
    }
    return Cart
};