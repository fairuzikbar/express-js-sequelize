const Customer = require("../model/customer");
const User = require("../model/user");
const Address = require('../model/address');
const Product = require('../model/product');

const DbMigration = async (db) => {
    const customer = Customer(db);
    const user = User(db);
    const address = Address(db);
    const product = Product(db);
    //Register your model here
    customer.hasOne(user);
    user.belongsTo(customer);
    customer.hasMany(address);
    address.belongsTo(customer)
    customer.belongsToMany(product, {through: 'r_product_customer'});
    product.belongsToMany(customer, {through: 'r_product_customer'});

    await db.sync();
}

module.exports = DbMigration;