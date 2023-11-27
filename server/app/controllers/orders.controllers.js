const { Error } = require('mongoose')
const { OrdersDao } = require('../dao/orders.dao')
const mongo = new OrdersDao


const newOrder = async (req, res) => {
    try {
        const order = req.body.order
        let newOrder = await mongo.newOrder(order)
        console.log(newOrder)
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




module.exports = {
    newOrder,
    getOrders
}