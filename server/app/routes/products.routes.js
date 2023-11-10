const { Router } = require('express');
const productRoutes = Router()

const { getProducts,
    getProductById,
    getProductsByTeam,
    getProductsByTeamFiltered,
    getProductsByCategory,
    getProductsByCategoryFiltered,
    updatePrices } = require('../controllers/products.controllers')

productRoutes.get('/products', getProducts)
productRoutes.get('/products/:id', getProductById)
productRoutes.get('/products-category/:category', getProductsByCategory)
productRoutes.get('/products-team/:team', getProductsByTeam)
productRoutes.put('/product-prices/:manga/:estampada/:retro/:actual', updatePrices)
productRoutes.get('/products-category/:category/filter/:filter', getProductsByCategoryFiltered)
productRoutes.get('/products-team/:team/filter/:filter', getProductsByTeamFiltered)


module.exports = productRoutes