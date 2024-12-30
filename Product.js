const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    category: String,
    dateOfSale: Date,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
