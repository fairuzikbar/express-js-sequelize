const express = require('express');
// const { route } = require('../middleware/json.middleware');
const router = express.Router();

//Ini akan mengumpulkan semua route yang ada
//kemaren ini index.js

const AppRoute = (customerRoute, userRoute) => {
    router.use('/customers', customerRoute);
    router.use('/users', userRoute)

    return router
}

module.exports = AppRoute;