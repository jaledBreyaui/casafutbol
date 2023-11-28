const { Router } = require('express')

const orderRoutes = Router()

const { getOrders, newOrder, deleteOrder } = require("../controllers/orders.controllers")


orderRoutes.get('/getorders', getOrders)
orderRoutes.post('/neworder', newOrder)
orderRoutes.delete('/deleteorder', deleteOrder)

module.exports = orderRoutes