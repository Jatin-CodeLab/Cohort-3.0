import { Server } from "socket.io";

export default function initializeSocket(httpServer) {
    const io = new Server(httpServer);
    
    io.on("connection", (socket) => {
			console.log("user a is connect", socket.id);

        socket.on("krishna", (msg) => {
                console.log('krishna vali event hai !',msg);
                io.emit("musk")
            })
        
			socket.on("disconnect", () => {
				console.log("user a is disconnect",socket.id);
			});
		});
}