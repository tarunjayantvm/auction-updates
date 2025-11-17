const adminSocket = require("./admin_socket");
const bidderSocket = require("./bidder_socket");
const spectatorSocket = require("./spectator_socket");

module.exports = (server) => {
    const { Server } = require("socket.io");

    const io = new Server(server, {
        cors: { origin: "*", methods: ["GET", "POST"] }
    });

    io.on("connection", (socket) => {
        console.log("🔌 Socket connected:", socket.id);

        adminSocket(socket, io);
        bidderSocket(socket, io);
        spectatorSocket(socket, io);

        socket.on("disconnect", () => {
            console.log("❌ Socket disconnected:", socket.id);
        });
    });
};
