module.exports = (customerRepo) => {
    const { create, list } = customerRepo;
    const registerNewCustomer = async (payload) => {
        try {
            return await create(payload);
        } catch (error) {
            console.log(error.message);
        }
    }

    const findAllCustomer = async () => {
        try {
            return await list();
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        registerNewCustomer, findAllCustomer
    }
}