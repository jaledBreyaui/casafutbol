const connection = require('../../config/mongoConnect')
const Product = require('../models/products.model')
const fs = require("fs")

class ProductsDao {
    constructor() {
        connection()
    }

    async postProducts(obj) {
        try {
            const product = await new Prod(obj)
            await product.save()
            return { msj: 'Producto añadido!', add }
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(page) {
        let limit = 12;
        let skip = (page - 1) * limit
        try {
            if (page === undefined) {
                const prod = await Product.find({})
                return prod
            }
            const totalItems = await Product.count({})
            const prod = await Product.find({}).skip(skip).limit(12)
            return { prod: prod, totalItems: totalItems }
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async getById(id) {
        try {
            const prod = await Product.find({ "_id": id })
            return prod
        } catch (error) {
            return error
        }
    }


    async getByCategory(category, page) {
        let limit = 12;
        let skip = (page - 1) * limit
        try {
            const totalItems = await Product.count({ "category": { $regex: category } })
            const prod = await Product.find({ "category": { $regex: category } }).skip(skip).limit(12)
            return { prod: prod, totalItems: totalItems }
        } catch (error) {
            return error
        }
    }

    async getByTeam(team, page) {
        let limit = 12;
        let skip = (page - 1) * limit
        try {
            const totalItems = await Product.count({ "team": team })
            const prod = await Product.find({ "team": team }).skip(skip).limit(12)
            return { prod: prod, totalItems: totalItems }
        } catch (error) {
            return error
        }
    }

    async delete() {
        try {
            const products = await Product.deleteMany({})
            return products
        } catch (error) {
            return error
        }
    }
}

module.exports = { ProductsDao }