
const mongoose = require('mongoose')
require('dotenv').config()

const connectMongo = async () => {
    try {

        const url = process.env.MONGODB_URI
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("mongo connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectMongo