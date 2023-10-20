
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs')



//rutas
const productRoutes = require('./app/routes/products.routes')


//middle
app.use(cors(
    {
        origin: true,
        credentials: true,
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
))

app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', productRoutes)

app.set('view engine', 'ejs')
app.set('views', __dirname + '/public/views')

app.listen(3001, (err) => {
    if (err) console.log(err);
    console.log(`listening in port : 3001`);
})


