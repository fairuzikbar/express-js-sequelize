const Config = require('../config/config');
const { initDb } = require('../manager/infra.manager')(Config);
const sequelize = initDb();
const Customer = require("../model/customer")

const DbMigration = async () => {
    //Register your model here
    await Customer(sequelize).sync();
}

module.exports = DbMigration;