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

    async getAll() {
        try {
            const prod = await Product.find({})
            return prod
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

    async delete() {
        try {
            const products = await Product.deleteMany({ categories: { $all: ["actuales"] } })
            console.log(products)
            return products
        } catch (error) {
            return error
        }
    }
}

module.exports = { ProductsDao }