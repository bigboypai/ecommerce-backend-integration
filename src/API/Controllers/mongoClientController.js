const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGOURI

async function connectToDatabase() {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
}

module.exports = connectToDatabase;