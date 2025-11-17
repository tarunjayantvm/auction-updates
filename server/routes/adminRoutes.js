const express = require('express');
const router = express.Router();
const { authMiddleware, requireRole } = require('../middleware/auth');
const adminController = require('../controllers/adminController');

// protected admin routes
router.use(authMiddleware);
router.use(requireRole(['admin']));

router.post('/create-event', adminController.createEvent);
router.post('/upload-players/:eventId', adminController.uploadPlayersCSV); // uploads CSV
router.post('/add-player/:eventId', adminController.addPlayerToEvent);
router.get('/events', adminController.listEvents);
router.post('/toggle-event/:eventId', adminController.toggleEvent);
router.post('/set-bidder-limit/:eventId', adminController.setBidderLimit);
router.post('/start-auction/:eventId', adminController.startAuction);
router.post('/stop-auction/:eventId', adminController.stopAuction);

module.exports = router;
