"use client";

import React, { useEffect } from "react";
import { socket } from "./SocketConnection";

const SocketComponent: React.FC = () => {
    useEffect(() => {
        // Connect to the server
        socket.connect();
        console.log("connecting");
        

        // Listen for server events
        socket.on("connect", () => {
            console.log("Connected to the server");
        });

        socket.on("message", (data) => {
            console.log("Message from server:", data);
        });

        socket.on("disconnect", () => {
            console.log("Disconnected from the server");
        });

        // Cleanup the socket connection when the component unmounts
        return () => {
            socket.disconnect();
        };
    }, []);

    // Emit an event
    const sendMessage = () => {
        console.log("pressed");
        
        socket.emit("message", { text: "Hello from the frontend!" });
    };

    return (
        <div>
            <h1>Socket.IO Example</h1>
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
};

export default SocketComponent;
