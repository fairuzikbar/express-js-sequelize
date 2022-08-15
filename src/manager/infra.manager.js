const { Sequelize } = require('sequelize');

//ujung dari ini ketemu di server, yg lainnya sebagai penerima aja
const InfraManager = (config) => {
    const initDb = () => {
        const {dbHost, dbPort, dbUser, dbPassword, dbName, dbDriver} = config();
        const dsn = `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
        return new Sequelize(dsn);
    }
    return { initDb }
}

module.exports = InfraManager;