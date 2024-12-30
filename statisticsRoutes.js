const express = require('express');
const {
    getStatistics,
    getBarChartData,
    getPieChartData,
    getCombinedData,
} = require('../controllers/statisticsController');

const router = express.Router();

router.get('/', getStatistics);
router.get('/bar', getBarChartData);
router.get('/pie', getPieChartData);
router.get('/combined', getCombinedData);

module.exports = router;
