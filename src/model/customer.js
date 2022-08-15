const Config = require('../config/config');
const { DataTypes } = require('sequelize');
const { initDb } = require('../manager/infra.manager')(Config);
const MST_CUSTOMER = 'mst_customer'

//Define model
module.exports = () => {
    // await Customer.sync({alter: true})
    return initDb().define(MST_CUSTOMER, {
        id: {
            type: DataTypes.UUID, //Bawaan squelize, udah ada UUID
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50), //Kalo isinya banyak gini //Dalam kurung itu length nya
            allowNull: false
        },
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        balance: DataTypes.INTEGER,
        isStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        paranoid: true //menghapus dari select
    })
}