module.exports = (customerRepo) => {
    const { create, list, getById, remove, update } = customerRepo();
    const registerNewCustomer = async (payload) => {
        try {
            return await create(payload);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    const findAllCustomer = async (keyword, page, size, sortBy, sortType) => {
        try {
            // if(isNaN(page) || isNaN(size)){
            //     page = 1;
            //     size = 5;
            // } 
            const { count, rows } = await list(keyword, page, size, sortBy, sortType);
            return { count, rows }
        } catch (error) {
            console.log(error.message);
        }
    }

    const findCustomerById = async (id) => {
        try {
            console.log('service',id);
            return await getById(id);
        } catch (error) {
            console.log(error.message);
        }
    }

    const removeCustomer = async (id) => {
        try {
            return await remove(id);
        } catch (error) {
            console.log(error.message);
        }
    }

    const updateOldCustomer = async (payload) => {
        try {
            return await update(payload);
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        registerNewCustomer, findAllCustomer, findCustomerById, removeCustomer, updateOldCustomer
    }
}