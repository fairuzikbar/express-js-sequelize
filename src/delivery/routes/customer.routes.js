const express = require('express');
const router = express.Router();

module.exports = (customerController) => {
    const { create, list, findById, remove, update } = customerController();

    router.post('/', create);
    router.get('/', list);
    router.get('/:id', findById);
    router.delete('/:id', remove);
    router.put('/', update);
    return router;
}