import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("🔌 Client connecté");

  socket.on("send_message", (msg) => {
    io.emit("receive_message", msg); // Broadcast
  });

  socket.on("disconnect", () => {
    console.log("❌ Client déconnecté");
  });
});

httpServer.listen(10001, () => console.log("💬 Serveur Socket.io en marche sur 10001"));
