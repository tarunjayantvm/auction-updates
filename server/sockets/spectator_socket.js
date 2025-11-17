// sockets/spectator_socket.js

module.exports = (socket, io) => {
    console.log("Spectator connected:", socket.id);
    // No events needed from spectator
};
