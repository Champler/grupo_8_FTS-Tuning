module.exports = (sequelize, DataTypes) => {
    let alias = ;
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: falseº
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
        
    }
    let config = {
        tableName = 'categories',
        timestamps = false
    }

    const Category = sequelize.define()
}