import Post from "../models/Post.js";
import User from "../models/User.js";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API3,
});

const openai = new OpenAIApi(configuration); // Initialize  OpenAI API  instance

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//generate post

/* CREATE */
export const createPost = async (req, res) => {
  try {
    // I need to do a change here for generating picture
    // and posting
    const { userId, description, photo } = req.body;
    // const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);

    const photoUrl = await cloudinary.uploader.upload(photo);

    // console.log(photoUrl.url);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      // userPicturePath: photoUrl.url,
      userPicturePath: user.picturePath,
      picturePath: photoUrl.url,
      likes: {},
      comments: [],
      credits: user.credits - 1,
      totalPosts: user.totalPosts + 1,
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post).sort({ createdAt: "desc" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find().sort({ createdAt: "desc" });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
