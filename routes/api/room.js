const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const router = express.Router();

const room = http.createServer(app);
const io = socketio(room);

const User = require("../../models/User");

io.on("connection", (socket) => {
  console.log("A User Has Connected");
});

router.get("/", (req, res) => res.send("Chat Room Route Initialized"));

module.exports = router;
