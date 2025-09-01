# Serveur Multijoueur pour Delta Emulator

Ce projet est un prototype de serveur backend conçu pour activer le jeu multijoueur en ligne pour l'émulateur Delta sur iOS. Il utilise Node.js, Express et Socket.IO pour créer une communication en temps réel et à faible latence entre les joueurs.

## Fonctionnalités

- **Communication via WebSockets** : Utilise `socket.io` pour une communication bidirectionnelle instantanée.
- **Gestion de Salons (Rooms)** : Isole les sessions de jeu pour que seuls les joueurs concernés reçoivent les informations.
- **Léger et Rapide** : Construit sur Node.js pour des performances optimales.

## Comment ça marche ?

1.  Le serveur est lancé et attend des connexions de clients (l'application Delta modifiée).
2.  Lorsqu'un joueur se connecte, il est placé dans un salon de jeu.
3.  Chaque action de la manette est envoyée au serveur via un événement WebSocket.
4.  Le serveur relaie cette action à tous les autres joueurs présents dans le même salon.
5.  L'émulateur de chaque joueur reçoit l'action et la simule, gardant ainsi le jeu synchronisé.

## Déploiement

Ce serveur est conçu pour être déployé sur des plateformes comme **Render** ou Heroku.

---
© [2025] [Mauricio Mangituka!]. Tous droits 




### notre mail 

MauricioMagic631@gmail.com
