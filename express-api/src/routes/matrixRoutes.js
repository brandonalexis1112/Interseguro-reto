const express = require('express');
const matrixController = require('../controllers/matrixController');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/matrix', authenticateJWT, matrixController.processMatrix);

module.exports = router;
