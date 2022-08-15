const CustomerRepository = require('../repository/customer.repository');

module.exports = (infraManager) => {
    const { initDb } = infraManager();
    const db = initDb();
    
    //semua repo di sini
    const customerRepo = () => {
        return () => CustomerRepository(db);
    }
    return {
        customerRepo
    }
}