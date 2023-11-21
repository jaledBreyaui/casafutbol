const mongoose = require('mongoose')
const date = new Date()


const ordersSchema = new mongoose.Schema({
    buyer: {
        required: true,
        type: Object
    },
    products: {
        required: true,
        type: Array,
    },
    total: {
        required: true,
        type: String
    },
    date: {
        type: String,
        default: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
})

console.log(ordersSchema.date)

module.exports = mongoose.model('compras', ordersSchema)