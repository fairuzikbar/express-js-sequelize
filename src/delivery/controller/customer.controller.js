const Response = require('../../utils/response')

module.exports = (customerService) => {
    const { registerNewCustomer, findAllCustomer, findCustomerById, removeCustomer, updateOldCustomer } = customerService();

    const create = async (req, res) => {
        try {
            const payload = req.body;
            const customer = await registerNewCustomer(payload)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', customer))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, error.message))
        }
    }

    const list = async (req, res) => {
        try {
            let { keyword, page, size, sortBy, sortType } = req.query
            if(isNaN(page) || isNaN(size)){
                page = 1;
                size = 5;
            }
            const { count, rows } = await findAllCustomer(keyword, page, size, sortBy, sortType)
            res.json(Response().pagination(
                res.statusCode, 'SUCCESS', rows, page, count, size, sortBy, sortType, keyword
                ));
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, error.message))
        }
    }

    const findById = async (req, res) => {
        try {
            const id = req.params.id;
            const customer = await findCustomerById(id)
            console.log('controller',id);
            console.log('contrCust',customer);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', customer))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, error.message))
        }
    }

    const remove = async (req, res) => {
        try {
            const id = req.params.id;
            const customer = await removeCustomer(id)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', customer))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, error.message))
        }
    }

    const update = async (req, res) => {
        try {
            const payload = req.body;
            const customer = await updateOldCustomer(payload)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', customer))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, error.message))
        }
    }

    return {
        create, list, findById, remove, update
    }
}