import { Server } from "socket.io";

import SOCKET_EVENTS from "@/utils/socketEvents";

import db from "@/firebase/FirebaseService";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    // Socket.io server already initialized, use that one
    console.log("-- SOCKET.IO ALREADY INITIALIZED");
    res.end();
  } else {
    console.log("-- SOCKET.IO INITIALIZED");
    const io = new Server(res.socket.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });
    res.socket.server.io = io;

    // On Connection
    io.on(SOCKET_EVENTS.CONNECTION, (socket) => {
      console.log(`A USER Connected : ${socket.id}`);

      // Creating a New Game Room

      socket.on(SOCKET_EVENTS.CREATE_ROOM, () => {
        console.log("Creating a New Game Room");

        // Store the New game in firebase
        const newRoomRef = db.collection("rooms").doc();
        const newRoom = {
          id: newRoomRef.id,
          players: [],
          status: "waiting",
          createdAt: new Date(),
        };

        newRoomRef.set(newRoom);
        console.log("New Room Created : ", newRoom);
        // Join the room
        socket.join(newRoom.id);

        // Send the room id to the client
        socket.emit(SOCKET_EVENTS.ROOM_CREATED, newRoom.id);
      });
    });

    res.end();
  }
};

export default SocketHandler;
