const Item = require("../Models/Item")

async function getItems (req, res) {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        console.error("Error fetching items", error);
        res.status(500).json({ error: "Internal server error" })
    }
}

async function getItemById (req, res) {
    const id = req.params.id
    try {
        const item = await Item.findById(id)
        res.json(item)
    } catch (error) {
        console.error("Error fetching item", error);
        res.status(500).json({ error: "Internal server error" })
    }
}

module.exports = { getItems, getItemById }