const express = require("express");
const apiRouter = require("./API/routes")
const connectToDatabase = require("./API/Controllers/mongoClientController")

const app = express();

async function main () {
    await connectToDatabase()

    app.use('/api', apiRouter)

    app.listen(3031, () => {
    console.log('app working')
})
}

main().catch(error => console.error("Error starting the server:", error));