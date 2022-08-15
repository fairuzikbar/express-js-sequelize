const Customer = require("../model/customer");

module.exports = (db) => { // CustomerRepository
    const create = async (payload) => {
        try {
            return await Customer(db).create(payload)
        } catch (error) {
            console.log(error.message);
        }
    }

    const list = async () => {
        try {
            return await Customer(db).findAll()
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        create, list
    }
}