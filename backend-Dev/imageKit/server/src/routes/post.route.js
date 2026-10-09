import express from "express";
import { createPost, getAllPost } from "../controller/post.controller.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/create", upload.single("image"), createPost);
router.get("/allImage", getAllPost);

export default router;
