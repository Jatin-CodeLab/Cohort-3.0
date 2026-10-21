import app from "./app/app.js";
import { createServer } from "node:http";
import initializeSocket from "./socket/socket.server.js";

const httpserver = createServer(app)
initializeSocket(httpserver)

httpserver.listen(3000, () => {
	console.log("port laga gaya hai");
});
