const CustomerRepository = require('../repository/customer.repository');
const UserRepository = require('../repository/user.repository');

module.exports = (infraManager) => {
    const { initDb } = infraManager();
    const db = initDb();
    
    //semua repo di sini
    const customerRepo = () => {
        return () => CustomerRepository(db);
    }

    const userRepo = () => {
        return () => UserRepository(db);
    }
    return {
        customerRepo, userRepo
    }
}