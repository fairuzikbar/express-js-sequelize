const express = require('express');
const router = express.Router();

//Ini akan mengumpulkan semua route yang ada
//kemaren ini index.js
module.exports = (customerRoute) => { //nanti ada routes routes lainnya
    router.use('/customers', customerRoute);
    return router;
}