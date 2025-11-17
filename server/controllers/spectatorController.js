const Event = require('../models/Event');

const listActiveEvents = async (req, res) => {
  const events = await Event.find({ active: true });
  res.json(events);
};

const joinEvent = async (req, res) => {
  const { eventId } = req.params;
  const ev = await Event.findById(eventId);
  if (!ev || !ev.active) return res.status(400).json({ message: 'Event not active' });

  const io = require('../sockets/index').getIo();
  if (io) io.to(`event_${eventId}`).emit('spectator_joined', { spectatorId: req.user._id, username: req.user.username });

  res.json({ message: 'Joined as spectator' });
};

const leaveEvent = async (req, res) => {
  const { eventId } = req.params;
  const io = require('../sockets/index').getIo();
  if (io) io.to(`event_${eventId}`).emit('spectator_left', { spectatorId: req.user._id, username: req.user.username });
  res.json({ message: 'Left event' });
};

module.exports = { listActiveEvents, joinEvent, leaveEvent };
