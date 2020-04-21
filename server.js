const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);
const connectDB = require("./config/db");

connectDB();

const io = socketio(server);

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/room", require("./routes/api/room"));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
