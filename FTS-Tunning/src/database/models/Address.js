module.exports = (sequelize, DataTypes) => {
    let alias = 'Address';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        address: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        floor_dpt: {
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
        user_id: {
            type: DataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "addresses",
        timestamps: false
    }
    const Address = sequelize.define(alias, cols, config); 

    Address.associate = models => {
        Address.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id",
        })
    }
    return Address
};