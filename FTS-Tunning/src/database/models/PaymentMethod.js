module.exports = (sequelize, DataTypes) => {
    let alias = "PaymentMethod"

    let cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50)
        }
    }

    let config = {
        tableName: 'payment_methods',
        timestamps: false
    }

    const PaymentMethod = sequelize.define(alias, cols, config)

    PaymentMethod.associate = models => {
        PaymentMethod.hasMany(models.Ticket, {
            as: 'PaymentMethod',           
        })
    }
}