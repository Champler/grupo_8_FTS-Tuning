module.exports = (sequelize, DataTypes) => {
    let alias = 'Ticket'

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        payment_type_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        tableName: 'tickets',
        timestamps: false
    }

    const Ticket = sequelize.define(alias, cols, config)

    Ticket.associate = models => {
        Ticket.belongsTo(models.Cart, {
            as: 'ticket',
            foreignKey: 'cart_id'
        })
        Ticket.belongsTo(models.PaymentMethod, {
            as: 'ticket-m',
            foreignKey: 'payment_method_id'
        })
        Ticket.belongsTo(models.PaymentType, {
            as: 'ticket-t',
            foreignKey: 'payment_type_id'
        })
    }

    return Ticket
}