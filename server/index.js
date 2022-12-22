const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
io.on("connection", (socket) => {
  // Emit the Socket.io event to the client when the function is called
  console.log(socket.id);
  socket.on("send_notification", () => {
    socket.emit("notification", "Hello from server");
  });
});

server.listen(4000, () => {
  console.log("Socket.io server listening on port 4000");
});
