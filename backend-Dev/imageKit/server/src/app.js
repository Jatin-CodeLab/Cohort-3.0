import express from "express";
import dotenv from "dotenv";
import router from "./routes/post.route.js";
dotenv.config()


const app = express();

app.use(express.json())

app.get("/", (req, res) => {
	res.send("port lag gaya hai");  
});

app.use("/api/post", router);

export default app
