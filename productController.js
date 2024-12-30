const axios = require('axios');
const Product = require('../models/Product');

// Initialize the database with seed data
const initializeDatabase = async (req, res) => {
    try {
        const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        await Product.deleteMany({}); // Clear any existing data
        await Product.insertMany(data); // Insert new data
        res.status(200).json({ message: 'Database initialized successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error initializing database' });
    }
};

// List all transactions with search and pagination
const getTransactions = async (req, res) => {
    const { month, search = '', page = 1, perPage = 10 } = req.query;
    try {
        const start = new Date(`${month} 1, 2024`); // Set year as 2024, it will match the month only
        const end = new Date(`${month} 31, 2024`);
        
        const query = {
            dateOfSale: { $gte: start, $lte: end },
            $or: [
                { title: new RegExp(search, 'i') },
                { description: new RegExp(search, 'i') },
                { price: new RegExp(search, 'i') },
            ],
        };

        const transactions = await Product.find(query)
            .skip((page - 1) * perPage)
            .limit(parseInt(perPage));
        
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching transactions' });
    }
};

module.exports = { initializeDatabase, getTransactions };
