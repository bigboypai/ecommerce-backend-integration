const express = require("express");
const apiRouter = express.Router();

const { getItems, getItemById } = require("./Controllers/itemsController")

// , getItemById, createItem, updateItem, deleteItem (to add)

apiRouter.get('/products', getItems)
apiRouter.get('/products/:id', getItemById)
// apiRouter.post('items', createItem)
// apiRouter.put('items/:id', updateItem)
// apiRouter.delete('items:id', deleteItem)

module.exports = apiRouter