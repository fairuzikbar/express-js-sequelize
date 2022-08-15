// Ini jantungnya
const http = require('http');
const express = require('express');
const app = express();
const Config = require('../config/config');
const DbMigration = require('../config/db.migration')
const jsonMiddleware = require('../delivery/middleware/json.middleware');
const AppRoute = require('../delivery/routes/app.routes');
const InfraManager = require('../manager/infra.manager');
const RepoManager = require('../manager/repo.manager');
const ServiceManager = require('../manager/service.manager');
const CustomerController = require('../delivery/controller/customer.controller');
const CustomerRoute = require('./routes/customer.routes');

module.exports = () => {
    const { host, port } = Config();
    const infraManager = () => InfraManager(Config);
    const repoManager = () => RepoManager(infraManager);
    const serviceManager = () => ServiceManager(repoManager);
    const { initDb } = infraManager()

    const initCustomerRoute = () => {
        const customerController = () => CustomerController(serviceManager().customerService()); // kurang () di customerService

        return CustomerRoute(customerController);
    }

    const initController = () => {
        app.use(jsonMiddleware);
        app.use(AppRoute(initCustomerRoute()));
    }

    const run = () => {
        initController();
        DbMigration();

        const server = http.createServer(app);
        server.on('error', (error) => {
            console.log(`Server failed to start ${error.message}`);
        })

        server.listen(port, () => {
            if(server.listening) {
                console.log(`Server run on ${host}:${port}`);
            }
        })
    }

    return { run }
}