
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs')
const helmet = require('helmet')
const PORT = process.env.PORT || 3001


//rutas
const productRoutes = require('./app/routes/products.routes.js')
const orderRoutes = require('./app/routes/orders.routes.js')


//middle
app.use(cors(
    {
        origin: ["https://www.somoscasafutbol.com", 'http://127.0.0.1:5173', "http://localhost:5173"],
        credentials: true,
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
))

app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet());



app.use('/', productRoutes)
app.use('/orders', orderRoutes)


app.set('view engine', 'ejs')
app.set('views', __dirname + '/public/views')



app.listen(PORT, "0.0.0.0", (err) => {
    if (err) console.log(err);
    console.log(`listening in port : 3001`);
})

module.exports = app

