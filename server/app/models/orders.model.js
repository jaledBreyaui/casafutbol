const mongoose = require('mongoose')
const date = new Date()

const ordersSchema = new mongoose.Schema({
    buyer: {
        required: true,
        type: String
    },
    products: {
        required: true,
        type: String,
    },

    date: {
        type: Date,
        default: `${date.getMonth()}/${date.getFullYear()}`
    }
})

module.exports = mongoose.model('compras', ordersSchema)