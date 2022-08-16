const Customer = require("../model/customer");
const User = require("../model/user");

const DbMigration = async (db) => {
    const customer = Customer(db);
    const user = User(db);
    //Register your model here
    await customer.hasOne(user);
    await user.belongsTo(customer);
    await customer.sync();
    await user.sync();

    // await user.create({
    //     username: 'jutionck',
    //     password: 'password',
    //     mstCustomerId: '289955f9-0677-48bd-af77-5a640817e6ce'
    // })

    // const users = await user.findAll({
    //     include: customer
    // })
    // console.log(JSON.stringify(users, null, 2));
}

module.exports = DbMigration;