const { Router } = require('express')

const orderRoutes = Router()

const { getOrders, newOrder } = require("../controllers/orders.controllers")


orderRoutes.get('/getorders', getOrders)
orderRoutes.post('/neworder', newOrder)


module.exports = orderRoutes