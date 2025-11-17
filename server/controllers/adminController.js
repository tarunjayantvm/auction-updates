const Event = require('../models/Event');
const Player = require('../models/Player');
const csv = require('csvtojson');

const createEvent = async (req, res) => {
  try {
    const { name, date, type } = req.body;
    const evt = await Event.create({ name, date, type });
    return res.json({ message: 'Event created', event: evt });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const listEvents = async (req, res) => {
  const events = await Event.find().populate('players');
  res.json(events);
};

const toggleEvent = async (req, res) => {
  const { eventId } = req.params;
  const ev = await Event.findById(eventId);
  if (!ev) return res.status(404).json({ message: 'Event not found' });
  ev.active = !ev.active;
  await ev.save();
  res.json({ message: 'Event toggled', active: ev.active });
};

const setBidderLimit = async (req, res) => {
  const { eventId } = req.params;
  const { limit } = req.body;
  const ev = await Event.findById(eventId);
  if (!ev) return res.status(404).json({ message: 'Event not found' });
  ev.bidderLimit = Number(limit);
  await ev.save();
  res.json({ message: 'Bidder limit updated', bidderLimit: ev.bidderLimit });
};

const uploadPlayersCSV = async (req, res) => {
  // expects file uploaded via multer (see route integration)
  try {
    if (!req.file) return res.status(400).json({ message: 'No file' });
    const { eventId } = req.params;
    const json = await csv().fromString(req.file.buffer.toString());
    // minimal mapping - expects columns: name,country,role,basePrice
    const players = await Promise.all(json.map(async p => {
      const doc = await Player.create({
        name: p.name,
        country: p.country || '',
        role: p.role || '',
        basePrice: p.basePrice ? Number(p.basePrice) : 0
      });
      return doc;
    }));

    const ev = await Event.findById(eventId);
    ev.players.push(...players.map(p => p._id));
    await ev.save();

    res.json({ message: 'Players uploaded', count: players.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'CSV upload error' });
  }
};

const addPlayerToEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const payload = req.body; // name, country, role, basePrice
    const player = await Player.create({
      name: payload.name,
      country: payload.country,
      role: payload.role,
      basePrice: Number(payload.basePrice) || 0
    });
    const ev = await Event.findById(eventId);
    ev.players.push(player._id);
    await ev.save();
    res.json({ message: 'Player added', player });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const startAuction = async (req, res) => {
  try {
    const { eventId } = req.params;
    const ev = await Event.findById(eventId).populate('players');
    if (!ev) return res.status(404).json({ message: 'Event not found' });
    ev.started = true;
    await ev.save();

    // Emit socket event to clients (socket layer will listen for this admin action)
    const sockets = require('../sockets/index').getIo();
    if (sockets) sockets.emit('auction_started', { eventId });

    res.json({ message: 'Auction started' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const stopAuction = async (req, res) => {
  try {
    const { eventId } = req.params;
    const ev = await Event.findById(eventId);
    if (!ev) return res.status(404).json({ message: 'Event not found' });
    ev.started = false;
    await ev.save();
    const sockets = require('../sockets/index').getIo();
    if (sockets) sockets.emit('auction_stopped', { eventId });
    res.json({ message: 'Auction stopped' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createEvent,
  listEvents,
  toggleEvent,
  setBidderLimit,
  uploadPlayersCSV,
  addPlayerToEvent,
  startAuction,
  stopAuction
};
