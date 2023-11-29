
const connection = require('../../config/mongoConnect')
const Product = require('../models/products.model')


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
            return error
        }
    }

    async getAll(page, size) {
        let limit = 12;
        let skip = (page - 1) * limit
        try {
            if (page === undefined) {
                const prod = await Product.find({})
                return prod
            }
            if (size !== undefined && size !== "") {
                const totalItems = await Product.count({}).where(`stock.${size}`).gte(1)
                const prod = await Product.find({}).where(`stock.${size}`).gte(1).skip(skip).limit(12)
                return { prod: prod, totalItems: totalItems }
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


    async getByCategory(category, page, size) {
        let limit = 12;
        let skip = (page - 1) * limit
        try {
            if (size !== undefined && size !== "") {
                const totalItems = await Product.count().where(`stock.${size}`).gte(1).where("category").regex(category)
                const prod = await Product.find().where(`stock.${size}`).gte(1).where("category").regex(category).skip(skip).limit(12)
                return { prod: prod, totalItems: totalItems }
            }
            const totalItems = await Product.count({ "category": { $regex: category } })
            const prod = await Product.find({ "category": { $regex: category } }).skip(skip).limit(12)
            return { prod: prod, totalItems: totalItems }
        } catch (error) {
            return error
        }
    }

    async getByTeam(team, page, size) {
        let limit = 12;
        let skip = (page - 1) * limit
        try {
            if (size !== undefined && size !== "") {
                const totalItems = await Product.count().where(`stock.${size}`).gte(1).where("team").equals(team)
                const prod = await Product.find({ "team": team }).where(`stock.${size}`).gte(1).skip(skip).limit(12)
                return { prod: prod, totalItems: totalItems, prueba: prueba }
            }
            const totalItems = await Product.count({ "team": team })
            const prod = await Product.find({ "team": team }).skip(skip).limit(12)
            return { prod: prod, totalItems: totalItems }
        } catch (error) {
            return error
        }
    }

    async updatePrices(manga, estampada, retro, actual) {
        try {
            const retros = await Product.updateMany(
                { "category": { $regex: "Retro" } },
                { $set: { price: Number(retro) } }
            )
            const actuales = await Product.updateMany(
                { "category": { $regex: "Actual" } },
                { $set: { price: Number(actual) } }
            )
            const estampadas = await Product.updateMany(
                { "title": { $regex: "ESTAMPADA" } },
                { $set: { price: Number(estampada) } }
            )
            const mangaLarga = await Product.updateMany(
                { "title": { $regex: "MANGA" } },
                { $set: { price: Number(manga) } }
            )

            return { retro: retros, estampadas: estampadas, actual: actuales, mangaLarga: mangaLarga }
        } catch (error) {
            return error
        }
    }

    async decreaseStock(id, selectedSize, quantity) {
        try {
            const product = await this.getById(id)
            const stock = product[0].stock[selectedSize]
            if (stock > 0) {
                product[0].stock[selectedSize] = stock - quantity
                const update = await Product.updateOne({ "_id": id }, { $set: { stock: product[0].stock } })
                await update.save()
            }
            return product
        } catch (error) {
            return error
        }
    }

    async increaseStock(id, selectedSize, quantity) {
        try {
            const product = await this.getById(id)
            const stock = product[0].stock[selectedSize]
            product[0].stock[selectedSize] = stock + quantity
            const update = await Product.updateOne({ "_id": id }, { $set: { stock: product[0].stock } })
            await update.save()
            return product
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