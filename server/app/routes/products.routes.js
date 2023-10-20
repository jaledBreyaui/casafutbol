const { Router } = require('express');
const productRoutes = Router()

const { getProducts, getProductById, deleteActuales } = require('../controllers/products.controllers')

productRoutes.get('/products', getProducts)
productRoutes.get('/products/:id', getProductById)
productRoutes.get('/products/delete/camisetas/actuales', deleteActuales)

module.exports = productRoutes