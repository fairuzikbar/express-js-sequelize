const {Op} = require('sequelize');
const User = require("../model/user");
const Customer = require('../model/customer')

module.exports = (db) => {
    //Register your model here
    const customer = Customer(db);
    const user = User(db);
    customer.hasOne(user);
    user.belongsTo(customer);
    
    const create = async (payload) => {
        try {
            return await user.create(payload)
        } catch (error) {
            console.log(error.message);
        }
    }

    const list = async () => {
        try {
            return await user.findAll({
                include: {
                    model: customer,
                    //custom table
                    attributes: ['id','name','address']
                },
                //user table
                attributes: {
                    exclude: ['password'] //password tidak ditampilkan
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    // const list = async (keyword = '',page, size, sortBy = 'createdAt', sortType = 'DESC') => {
    //     try {
    //         const offset = size*(page - 1);
    //         const { count, rows } = await Customer(db).findAndCountAll({
    //             where: {
    //                 [Op.or] : [
    //                     {name: {[Op.iLike] : `%${keyword}%`}},
    //                     {address: {[Op.iLike] : `%${keyword}%`}},
    //                     {phone: {[Op.iLike] : `%${keyword}%`}},
    //                     {email: {[Op.iLike] : `%${keyword}%`}}
    //                 ]
    //             },
    //             offset: offset,
    //             limit: size,
    //             order: [
    //                 [sortBy, sortType]
    //             ]
    //         })
    //         return { count, rows }
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    // const getById = async (id) => {
    //     try {
    //         console.log('repo',id);
    //         const customer = await Customer(db).findByPk(id);
    //         console.log('repo',customer);
    //         if(!customer){
    //             return `Customer with value ID ${id} not found!`
    //         }
    //         return customer;
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    // const remove = async (id) => {
    //     try {
    //         const customer = await Customer(db).findByPk(id);
    //         if(!customer){
    //             return `Customer with value ID ${id} not found`
    //         }
    //         return await Customer(db).destroy({
    //             where: {
    //                 id: id
    //             }
    //         })
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    // const update = async (payload) => {
    //     try {
    //       const customer = await Customer(db).findByPk(payload.id);
    //       if (!customer) return `Customer with Value ID ${payload.id} not found`;
    //       return await Customer(db).update(payload, {
    //         where : {id : payload.id}
    //       });
    //     } catch (err) {
    //       return err.message;
    //     }
    //   };

    return {
        create, list, 
        //getById, remove, update
    }
}