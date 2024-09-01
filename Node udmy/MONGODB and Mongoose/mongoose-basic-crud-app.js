const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crudApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema
const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

// Create a model
const Item = mongoose.model('Item', itemSchema);

// Create (POST)
app.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read All (GET)
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read One (GET)
app.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update (PUT)
app.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated item
    );
    if (updatedItem == null) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete (DELETE)
app.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (deletedItem == null) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted', item: deletedItem });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
