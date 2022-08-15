const CustomerService = require('../service/customer.service');

module.exports = (repoManager) => {
    const { customerRepo } = repoManager();

    //semua repo
    const customerService = () => {
        return () => CustomerService(customerRepo());
    }
    return {
        customerService
    }
}