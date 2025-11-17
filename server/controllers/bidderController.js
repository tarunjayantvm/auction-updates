const Event = require('../models/Event');
const User = require('../models/User');

const listActiveEvents = async (req, res) => {
  const events = await Event.find({ active: true });
  res.json(events);
};

const joinEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const ev = await Event.findById(eventId);
    if (!ev || !ev.active) return res.status(400).json({ message: 'Event not active' });

    // Count active bidders connected stored in-memory via socket (we'll check with socket layer)
    // For now simple check: ensure event.bidderLimit not exceeded by counting all users with role bidder & active true
    const activeBiddersCount = await User.countDocuments({ role: 'bidder', active: true });
    if (activeBiddersCount >= ev.bidderLimit) {
      return res.status(403).json({ message: 'Bidder limit reached' });
    }

    // Mark this bidder active (server-side). In production you'd track socket connections
    await User.findByIdAndUpdate(req.user._id, { active: true });

    // notify socket layer to add to room
    const io = require('../sockets/index').getIo();
    if (io) io.to(`event_${eventId}`).emit('bidder_joined', { bidderId: req.user._id, username: req.user.username });

    res.json({ message: 'Joined event', eventId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const leaveEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    await User.findByIdAndUpdate(req.user._id, { active: false });
    const io = require('../sockets/index').getIo();
    if (io) io.to(`event_${eventId}`).emit('bidder_left', { bidderId: req.user._id, username: req.user.username });
    res.json({ message: 'Left event' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { listActiveEvents, joinEvent, leaveEvent };
