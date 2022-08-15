const DbMigration = require('./src/config/db.migration');
const Customer = require('./src/model/customer');

const run = async () => {
    await DbMigration();
    // manager -> connection, repo, service

    //CRUD basic
    // const addCustomer01 = await Customer().create({
    //     name: 'Joko Widodo',
    //     address: 'Jakarta',
    //     phone: '8292929',
    //     email: 'joko.widodo@ina.com',
    //     balance: 20
    // })
    // console.log('customer01', addCustomer01);

    //BULK Create
    // const addCustomerBulk = await Customer().bulkCreate([
    //     { name: 'Fikri Maulana',
    //     address: 'Bandung',
    //     phone: '12345656',
    //     email: 'fikri.herdian@ina.com',
    //     balance: 20
    // },
    // { name: 'Reynaldi Akbar',
    //     address: 'Kuningan',
    //     phone: '09773928',
    //     email: 'reynaldi.akbar@ina.com',
    //     balance: 20
    // },
    // { name: 'Daud Haidar',
    //     address: 'Bekasi',
    //     phone: '5556768',
    //     email: 'daud@haidar.com',
    //     balance: 20
    // },
    // { name: 'Stevano Suwuh',
    //     address: 'Manado',
    //     phone: '980998732',
    //     email: 'stevano@ina.com',
    //     balance: 20
    // },
    // { name: 'Taufik Hidayat',
    //     address: 'Jakarta Timur',
    //     phone: '998098321980',
    //     email: 'tauhid@ina.com',
    //     balance: 20
    // }])
    // console.log('addCustomerBulk:', addCustomerBulk.length);

    //SELECT * FROM .....
    const customer01 = await Customer().findAll();
    console.log('SELECT * FROM');
    console.log(JSON.stringify(customer01, null, 2)); //2 itu spasi

    // const customer02 = await Customer().findAll({
    //     where: {
    //         name: 'Joko Anwar'
    //     }
    // });
    // console.log('SELECT * FROM WHERE name');
    // console.log(JSON.stringify(customer02, null, 2));


    // const customer03 = await Customer().findAll({
    //     order: [['createdAt', 'desc']]
    // });
    // console.log('SELECT * FROM ORDER DESC');
    // console.log(JSON.stringify(customer03, null, 2));


    // //findOne() && findByPk()
    // const customer04 = await Customer().findOne({
    //     where: {
    //         name: 'Joko Anwar'
    //     }
    // });
    // console.log('[singlerow] SELECT * FROM JSON stringify');
    // console.log(JSON.stringify(customer04, null, 2));

    // const customer05 = await Customer().findByPk('df4bdf5e-b390-4446-80ea-3aa2c596c0c0');
    // console.log('[single row by pk] SELECT * FROM');
    // console.log(JSON.stringify(customer05, null, 2));


    // //findAndCountAll -> digunakan untuk pagination(pahe, total item) limit, offset
    // //Data 3 [1, 2, 3] (limit 1, offset 1) -> 2
    // //rumus Pagination: offset = 


    // //Delete
    // console.log('DELETE FROM ...');
    // const delCustomer01 = await Customer().destroy({
    //     where: {
    //         id: 'ab251f0b-4352-4e00-be3f-8e9901169fcb'
    //     }
    // })
    // //Membalikkan rowCount, 1 = ada datanya, 0 = tidak ada datanya
    // console.log('delcustomer01', delCustomer01);

    // //Select mengikutsertakan deleted_at column is not null
    // const customer06 = await Customer().findAll({
    //     paranoid: false
    // });
    // console.log('SELECT * FROM');
    // console.log('After Delete');
    // console.log(JSON.stringify(customer06, null, 2));


    // //Update
    // console.log(`UPDATE....`);
    // const upCustomer01 = await Customer().update({
    //     balance: 1000000
    // }, {
    //     where: {
    //         id: '07819685-c999-471f-ba6c-73898fa49d5e'
    //     }
    // })
}

run()