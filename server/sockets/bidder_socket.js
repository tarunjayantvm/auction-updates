// sockets/bidder_socket.js

module.exports = (socket, io) => {

    socket.on("place_bid", (bidData) => {
        console.log("New bid:", bidData);

        // Broadcast to all users
        io.emit("new_bid", bidData);
    });

};
