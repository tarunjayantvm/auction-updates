const express = require('express');
const router = express.Router();
const { authMiddleware, requireRole } = require('../middleware/auth');
const bidderController = require('../controllers/bidderController');

router.use(authMiddleware);
router.use(requireRole(['bidder']));

router.get('/events', bidderController.listActiveEvents);
router.post('/join/:eventId', bidderController.joinEvent); // marks active bidder / check limit
router.post('/leave/:eventId', bidderController.leaveEvent);

module.exports = router;
