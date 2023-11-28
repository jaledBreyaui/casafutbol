const { Error } = require('mongoose')
const { OrdersDao } = require('../dao/orders.dao')
const mongo = new OrdersDao


const newOrder = async (req, res) => {
    try {
        const order = req.body.order
        let newOrder = await mongo.newOrder(order)
        res.json(newOrder)
    } catch (error) {
        return error
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await mongo.getOrders()
        res.json(orders)
    } catch (error) {
        return error
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.body
        const deleted = await mongo.deleteOrder(id)
        res.json({ msj: "orden eliminada y stock actualizado", deleted: deleted })
    } catch (error) {
        return error
    }
}




module.exports = {
    newOrder,
    getOrders,
    deleteOrder
}