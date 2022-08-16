const { DataTypes } = require('sequelize');
const MST_USER = 'mst_user'

//Define model
module.exports = (db) => {
    // await Customer.sync({alter: true})
    return db.define(MST_USER, {
        id: {
            type: DataTypes.UUID, //Bawaan squelize, udah ada UUID
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue:true
        }
    }, {
        freezeTableName: true,
        underscored: true,
        paranoid: true //menghapus dari select
    })
}