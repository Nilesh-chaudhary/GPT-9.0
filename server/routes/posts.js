import express from "express";
import {
  createPost,
  generatePost,
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// router.get("/", getFeedPosts);
router.get("/", verifyToken, getFeedPosts);

//added by me
router.post("/gen", generatePost);
// router.post("/create", verifyToken, createPost);

// end of added by me
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;
