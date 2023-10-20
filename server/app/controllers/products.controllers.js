const { ProductsDao } = require('../dao/products.dao')
const mongo = new ProductsDao()
const fs = require('fs')

const getProducts = async (req, res) => {
    try {
        const products = await mongo.getAll()
        res.json(products)
    } catch (error) {
        return error
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await mongo.getById(id)
        res.json(product)
    } catch (error) {
        return error
    }

}

const deleteActuales = async (req, res) => {
    try {
        const deleted = await mongo.delete()
        console.log(deleted)
        res.json(deleted)
    } catch (error) {
        return error
    }
}


module.exports = {
    getProducts,
    getProductById,
    deleteActuales
}