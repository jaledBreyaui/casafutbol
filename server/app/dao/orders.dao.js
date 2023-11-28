const connection = require('../../config/mongoConnect')
const Order = require('../models/orders.model')
const newOrderMail = require('../middlewares/neworder.mailer')

const { ProductsDao } = require('./products.dao')
const Product = new ProductsDao()


class OrdersDao {
    constructor() {
        connection()
    }

    async newOrder(obj) {
        try {
            const order = await new Order(obj)
            await order.save()
            obj.products.map(async (prod) => {
                await Product.decreaseStock(prod._id, prod.talleElegido.toLowerCase(), 1)
            })
            newOrderMail(obj.buyer, obj.products, obj.total, order._id)
            return {
                msj: "orden creada",
                id: order._id
            }
        } catch (error) {
            return error
        }
    }

    async getOrders() {
        try {
            const allOrders = await Order.find({})
            return allOrders
        } catch (error) {
            return error
        }
    }
    async getOrderById(id) {
        try {
            const order = await Order.find({ "_id": id })
            return order
        } catch (error) {
            return error
        }
    }



    async deleteOrder(id) {
        try {
            const order = await this.getOrderById(id)
            order[0].products.map(async (prod) => {
                await Product.increaseStock(prod._id, prod.talleElegido.toLowerCase(), 1)
            })
            const deleted = await Order.findOneAndDelete({ "_id": id })
            await deleted.save()
            return deleted
        } catch (error) {
            return error
        }
    }


}

module.exports = { OrdersDao }