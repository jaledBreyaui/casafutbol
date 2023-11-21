const connection = require('../../config/mongoConnect')
const Order = require('../models/orders.model')
const newOrderMail = require('../middlewares/neworder.mailer')


class OrdersDao {
    constructor() {
        connection()
    }

    async newOrder(obj) {
        try {
            const order = await new Order(obj)
            await order.save()
            newOrderMail(obj.buyer, obj.products, obj.total)
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
}

module.exports = { OrdersDao }