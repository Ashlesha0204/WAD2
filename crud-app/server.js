const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/crudDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Define Schema & Model
const ItemSchema = new mongoose.Schema({
    name: String,
});
const Item = mongoose.model("Item", ItemSchema);

// CRUD Routes

// CREATE - Add a new item
app.post("/items", async (req, res) => {
    const newItem = new Item({ name: req.body.name });
    await newItem.save();
    res.json(newItem);
});

// READ - Get all items
app.get("/items", async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// UPDATE - Edit an item
app.put("/items/:id", async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
    res.json(updatedItem);
});

// DELETE - Remove an item
app.delete("/items/:id", async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});