const { Sequelize, DataTypes } = require('sequelize');

const dsn = 'postgres://postgres:12345@localhost:5432/db_enigmart';
const sequelize = new Sequelize(dsn);

//Untuk cek koneksi
const conn = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error.message);
      }
}

conn()

//Define model
const run = async () => {
    const Customer = sequelize.define('mst_customer', {
        // //Kalo cuman satu
        // name: DataTypes.STRING
        id: {
            type: DataTypes.UUID, //Bawaan squelize, udah ada UUID
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50), //Kalo isinya banyak gini //Dalam kurung itu length nya
            allowNull: false
        },
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        balance: DataTypes.INTEGER,
        isStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        paranoid: true //menghapus dari select
    })
    await Customer.sync({alter: true})


    //CRUD basic
    // const addCustomer01 = await Customer.create({
    //     name: 'Joko Anwar',
    //     address: 'Jakarta',
    //     phone: '8292929',
    //     email: 'joko.anwar@usa.com',
    //     balance: 20
    // })
    // console.log('customer01', addCustomer01);

    //SELECT * FROM .....
    const customer01 = await Customer.findAll();
    console.log('SELECT * FROM');
    console.log(JSON.stringify(customer01, null, 2)); //2 itu spasi

    const customer02 = await Customer.findAll({
        where: {
            name: 'Joko Anwar'
        }
    });
    console.log('SELECT * FROM WHERE name');
    console.log(JSON.stringify(customer02, null, 2));


    const customer03 = await Customer.findAll({
        order: [['createdAt', 'desc']]
    });
    console.log('SELECT * FROM ORDER DESC');
    console.log(JSON.stringify(customer03, null, 2));


    //findOne() && findByPk()
    const customer04 = await Customer.findOne({
        where: {
            name: 'Joko Anwar'
        }
    });
    console.log('[singlerow] SELECT * FROM JSON stringify');
    console.log(JSON.stringify(customer04, null, 2));

    const customer05 = await Customer.findByPk('df4bdf5e-b390-4446-80ea-3aa2c596c0c0');
    console.log('[single row by pk] SELECT * FROM');
    console.log(JSON.stringify(customer05, null, 2));


    //findAndCountAll -> digunakan untuk pagination(pahe, total item) limit, offset
    //Data 3 [1, 2, 3] (limit 1, offset 1) -> 2
    //rumus Pagination: offset = 


    //Delete
    console.log('DELETE FROM ...');
    const delCustomer01 = await Customer.destroy({
        where: {
            id: 'ab251f0b-4352-4e00-be3f-8e9901169fcb'
        }
    })
    //Membalikkan rowCount, 1 = ada datanya, 0 = tidak ada datanya
    console.log('delcustomer01', delCustomer01);

    //Select mengikutsertakan deleted_at column is not null
    const customer06 = await Customer.findAll({
        paranoid: false
    });
    console.log('SELECT * FROM');
    console.log('After Delete');
    console.log(JSON.stringify(customer06, null, 2));


    //Update
    console.log(`UPDATE....`);
    const upCustomer01 = await Customer.update({
        balance: 1000000
    }, {
        where: {
            id: 'df4bdf5e-b390-4446-80ea-3aa2c596c0c0'
        }
    })
}

run()