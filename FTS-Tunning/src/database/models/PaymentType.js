module.exports = (sequelize, DataTypes) => {
    let alias = "PaymentType"

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
        tableName: 'payment_types',
        timestamps: false
    }

    const PaymentType = sequelize.define(alias, cols, config)

    PaymentType.associate = models => {
        PaymentType.hasMany(models.Ticket, {
            as: 'PaymentType',
            foreignKey: 'payment_type_id'         
        })
    }

    return PaymentType
}