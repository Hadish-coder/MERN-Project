const express = require('express');
const { initializeDatabase, getTransactions } = require('../controllers/productController');
const router = express.Router();

// Route to initialize database (GET /api/products/initialize)
router.get('/initialize', initializeDatabase);

// Route to fetch transactions with pagination and search (GET /api/products)
router.get('/', getTransactions);

module.exports = router;
