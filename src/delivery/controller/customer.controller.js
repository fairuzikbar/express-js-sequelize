const Response = require('../../utils/response')

module.exports = (customerService) => {
    const { registerNewCustomer, findAllCustomer } = customerService();

    const create = async (req, res) => {
        try {
            const payload = req.body;
            const customer = await registerNewCustomer(payload)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', customer))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, error.meesage))
        }
    }

    const list = async (req, res) => {
        try {
            const customers = await findAllCustomer(payload)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', customers))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, error.meesage))
        }
    }

    return {
        create, list
    }
}