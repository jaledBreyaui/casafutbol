const mongoose = require('mongoose')
const date = new Date()

const productsSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    team: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String
    },
    price: {
        type: String
    },
    tags: {
        required: true,
        type: Array
    },
    path: {
        type: String,
        required: true
    },
    stock: {
        xxl: Number,
        xl: Number,
        l: Number,
        m: Number,
        s: Number,
    },
    register_date: {
        type: Date,
        default: `${date.getMonth()}/${date.getFullYear()}`
    }
})

module.exports = mongoose.model('camisetas', productsSchema)