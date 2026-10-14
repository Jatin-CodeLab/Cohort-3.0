import app from "./app/app.js";
import { createServer } from "node:http";
import { Server } from "socket.io";


const httpserver = createServer(app)
const io = new Server(httpserver)

io.on('connection', (socket) => {
    console.log('user a is connect');
    console.log(socket.id);
    
    socket.on('disconnect', () => {
        console.log('user a is disconnect');
        
    })
})

httpserver.listen(3000, () => {
	console.log("port laga gaya hai");
});
