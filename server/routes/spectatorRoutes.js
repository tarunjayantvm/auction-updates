const express = require('express');
const router = express.Router();
const { authMiddleware, requireRole } = require('../middleware/auth');
const spectatorController = require('../controllers/spectatorController');

router.use(authMiddleware);
router.use(requireRole(['spectator']));

router.get('/events', spectatorController.listActiveEvents);
router.post('/join/:eventId', spectatorController.joinEvent);
router.post('/leave/:eventId', spectatorController.leaveEvent);

module.exports = router;
