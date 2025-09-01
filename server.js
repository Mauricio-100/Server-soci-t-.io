// Importe les librairies nécessaires
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

// Initialise le serveur web
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Sert les fichiers du dossier 'public' (là où on mettra notre HTML et CSS)
app.use(express.static('public'));

// Détecte quand un utilisateur se connecte
io.on('connection', (socket) => {
  console.log('✅ Un joueur est connecté.');

  // Le joueur rejoint automatiquement un salon de test
  const roomName = 'salle-test';
  socket.join(roomName);
  console.log(`Joueur a rejoint le salon : ${roomName}`);

  // Quand le serveur reçoit un message 'action_jeu' d'un joueur...
  socket.on('action_jeu', (message) => {
    // ... il le renvoie à tous les AUTRES joueurs dans le même salon
    console.log(`Action reçue : ${message}`);
    socket.to(roomName).emit('action_recue', message);
  });

  // Détecte quand un joueur se déconnecte
  socket.on('disconnect', () => {
    console.log('❌ Un joueur s\'est déconnecté.');
  });
});

// Le serveur écoute sur le port fourni par l'hébergeur, ou 3000 par défaut
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Serveur démarré et à l'écoute sur le port ${PORT}`);
});
