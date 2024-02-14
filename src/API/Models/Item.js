const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    name: String,
    currency: String,
    price: Number,
    imageUrl: String
}, {collection: "products-mercafruit"})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item