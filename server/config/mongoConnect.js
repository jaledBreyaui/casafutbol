
const mongoose = require('mongoose')
require('dotenv').config({ path: '../.env' })

const connectMongo = async () => {
    try {
        const url = process.env.MONGODB_URI
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectMongo