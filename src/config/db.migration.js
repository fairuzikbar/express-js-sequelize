const Customer = require("../model/customer")

const DbMigration = async () => {
    //Register your model here
    await Customer().sync();
}

module.exports = DbMigration;