
require('dotenv').config()
const express = require('express');
const handlebars = require("express-handlebars")
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
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
))

app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet());



app.use('/', productRoutes)
app.use('/orders', orderRoutes)

app.engine('handlebars',
    handlebars.engine({
        extname: '.handlebars',
        defaultLayout: 'email.handlebars',
        layoutsDir: __dirname + '/public/views',
        // partialsDir: __dirname + '/views/partials'
    }))
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/public/views')

const buyer = {
    Nombre: "Jaled",
    Apellido: "Breyaui",
    Email: "jaledbreyaui41@gmail.com",
    Teléfono: "1534921908",
    Localidad: "San Cristobal",
    Dirección: "av san juan 2672",
    Timbre: "b",
    CódigoPostal: "1232"
}
const products = [
    {
        stock: {
            "s": 0,
            "m": 1,
            "l": 1,
            "xl": 0,
            "xxl": 0
        },
        _id: "651349846a43a9f06b53dbba",
        title: "CAMISETA SUPLENTE RIVER 1995-1996",
        team: "RIVER",
        price: "34000",
        category: "Clubes Retro",
        tags: [
            "CAMISETA",
            "SUPLENTE",
            "RIVER",
            "1995-1996"
        ],
        path: "/public/imgs/clubesRetro/CAMISETASUPLENTERIVER1995-1996.jpg",
        talleElegido: "M"
    },
    {
        stock: {
            "s": 0,
            "m": 0,
            "l": 1,
            "xl": 0,
            "xxl": 0
        },
        _id: "651349846a43a9f06b53dbc5",
        title: "CAMISETA TITULAR BAYERN MUNICH 1995-1997",
        team: "BAYERN",
        price: "34000",
        category: "Clubes Retro",
        tags: [
            "CAMISETA",
            "TITULAR",
            "BAYERN",
            "MUNICH",
            "1995-1997"
        ],
        path: "/public/imgs/clubesRetro/CAMISETATITULARBAYERNMUNICH1995-1997.jpg",
        talleElegido: "L"
    }]

const total = "$ 68.000";
const id = "15348273"

app.get("/email", (req, res) => {
    res.render("email", { buyer, products, total, id });
})



app.listen(PORT, "0.0.0.0", (err) => {
    if (err) console.log(err);
    console.log(`listening in port : 3001`);
})

module.exports = app

