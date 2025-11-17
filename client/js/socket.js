// Global socket connection (works for admin, bidder, spectator)
const socket = io("http://localhost:5000");

// Connection logs
socket.on("connect", () => {
    console.log("Connected to server!");
});

// Universal message listener
socket.on("announcement", (msg) => {
    alert("ADMIN ANNOUNCEMENT: " + msg);
});
