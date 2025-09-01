import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("🔌 Client connecté :", socket.id);

  socket.on("send_message", (msg) => {
    console.log("📩 Message reçu :", msg);
    io.emit("receive_message", msg); // broadcast à tous
  });

  socket.on("disconnect", () => {
    console.log("❌ Client déconnecté :", socket.id);
  });
});

const PORT = process.env.PORT || 10000;
httpServer.listen(PORT, () => console.log(`💬 Serveur Socket.io en marche sur le port ${PORT}`));
