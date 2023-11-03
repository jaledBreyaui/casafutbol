const { ProductsDao } = require('../dao/products.dao')
const mongo = new ProductsDao()
const fs = require('fs')

const getProducts = async (req, res) => {
    try {
        let page = req.query.page
        const products = await mongo.getAll(page)
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

const getProductsByTeam = async (req, res) => {
    try {
        const { team } = req.params
        let page = req.query.page
        const products = await mongo.getByTeam(team, page)
        res.json(products)
    } catch (error) {
        return error
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params
        let page = req.query.page
        const capitalized = category.split(" ").map((word) => {
            const firstLetter = word.charAt(0).toUpperCase();
            const rest = word.slice(1).toLowerCase();
            return firstLetter + rest;
        }).join(" ")
        const productsByCategory = await mongo.getByCategory(capitalized, page)
        res.json(productsByCategory)
    } catch (error) {
        return error
    }
}

module.exports = {
    getProducts,
    getProductById,
    getProductsByCategory, getProductsByTeam
}