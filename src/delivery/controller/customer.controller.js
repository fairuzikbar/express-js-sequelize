const Response = require('../../utils/response')

module.exports = (customerService) => {
    const { registerNewCustomer, findAllCustomer } = customerService();

    const create = async (req, res) => {
        try {
            // const {registerNewCustomer} = await customerService()
            const payload = req.body;
            const customer = await registerNewCustomer(payload)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', customer))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, error.message))
        }
    }

    const list = async (req, res) => {
        try {
            // const {findAllCustomer} = await customerService()
            const customers = await findAllCustomer()
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', customers))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, error.message))
        }
    }

    return {
        create, list
    }
}