// sockets/admin_socket.js

module.exports = (socket, io) => {

    // Admin starts the auction
    socket.on("admin_start_auction", (data) => {
        io.emit("auction_started", data);
    });

    // Set current player
    socket.on("admin_set_player", (player) => {
        io.emit("current_player", player);
    });

    // Player sold event
    socket.on("admin_player_sold", (data) => {
        io.emit("player_sold", data);
    });

    // Admin announcements
    socket.on("admin_announcement", (msg) => {
        io.emit("announcement", msg);
    });

    // Pause auction
    socket.on("admin_pause", () => {
        io.emit("auction_paused");
    });

};
