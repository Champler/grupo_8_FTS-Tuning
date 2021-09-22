module.exports = (sequelize, dataTypes) => {
    let alias = 'Address';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        address: {
            type: dataTypes.STRING(70),
            allowNull: false
        },
        floor_dpt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        province: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "address",
        timestamps: true,
    }
    const User = sequelize.define(alias, cols, config); 

    Address.associate = models => {
        Address.belongTo(models.User, {
            as: "user",
            foreignKey: "user_id",
        })
    }
    return Address
};