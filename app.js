const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const productRoutes = require('./routes/productRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/statistics', statisticsRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

// Listen on Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
