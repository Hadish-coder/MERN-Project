const Product = require('../models/Product');

// Fetch statistics (total sales, total sold, total not sold)
const getStatistics = async (req, res) => {
    const { month } = req.query;
    try {
        const start = new Date(`${month} 1, 2024`);
        const end = new Date(`${month} 31, 2024`);

        // Calculate statistics
        const totalSales = await Product.aggregate([
            { $match: { dateOfSale: { $gte: start, $lte: end } } },
            { $group: { _id: null, total: { $sum: "$price" } } },
        ]);

        const totalItemsSold = await Product.countDocuments({
            dateOfSale: { $gte: start, $lte: end },
            status: 'sold',
        });

        const totalItemsNotSold = await Product.countDocuments({
            dateOfSale: { $gte: start, $lte: end },
            status: { $ne: 'sold' },
        });

        res.status(200).json({
            totalSales: totalSales[0]?.total || 0,
            totalItemsSold,
            totalItemsNotSold,
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching statistics' });
    }
};

// Fetch bar chart data based on price ranges
const getBarChartData = async (req, res) => {
    const { month } = req.query;
    const priceRanges = [
        { min: 0, max: 100 },
        { min: 101, max: 200 },
        { min: 201, max: 300 },
        { min: 301, max: 400 },
        { min: 401, max: 500 },
        { min: 501, max: 600 },
        { min: 601, max: 700 },
        { min: 701, max: 800 },
        { min: 801, max: 900 },
        { min: 901, max: Infinity },
    ];

    try {
        const start = new Date(`${month} 1, 2024`);
        const end = new Date(`${month} 31, 2024`);

        const data = await Promise.all(priceRanges.map(async (range) => {
            const count = await Product.countDocuments({
                dateOfSale: { $gte: start, $lte: end },
                price: { $gte: range.min, $lte: range.max },
            });
            return { priceRange: `${range.min}-${range.max}`, count };
        }));

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching bar chart data' });
    }
};

// Fetch pie chart data based on categories
const getPieChartData = async (req, res) => {
    const { month } = req.query;
    try {
        const start = new Date(`${month} 1, 2024`);
        const end = new Date(`${month} 31, 2024`);

        const data = await Product.aggregate([
            { $match: { dateOfSale: { $gte: start, $lte: end } } },
            { $group: { _id: "$category", count: { $sum: 1 } } },
            { $project: { category: "$_id", count: 1, _id: 0 } },
        ]);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching pie chart data' });
    }
};

// Combine statistics, bar chart, and pie chart data
const getCombinedData = async (req, res) => {
    const { month } = req.query;
    try {
        const statistics = await getStatistics(req, res);
        const barChartData = await getBarChartData(req, res);
        const pieChartData = await getPieChartData(req, res);

        const combinedData = {
            statistics,
            barChartData,
            pieChartData,
        };

        res.status(200).json(combinedData);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching combined data' });
    }
};

module.exports = { getStatistics, getBarChartData, getPieChartData, getCombinedData };
