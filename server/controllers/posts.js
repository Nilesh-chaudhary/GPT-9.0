import Post from "../models/Post.js";
import User from "../models/User.js";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import fs from "fs";
import path from "path";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API,
});

const openai = new OpenAIApi(configuration); // Initialize  OpenAI API  instance

/* CREATE */
export const createPost = async (req, res) => {
  try {
    // I need to do a change here for generating picture
    // and posting
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    // console.log("hi");
    //added
    // const imageResponse = await openai.createImage({
    //   prompt: ` ${description}`,
    //   n: 1,
    //   size: [512, 512],
    //   response_format: "b64_json",
    // });
    // const picturepathofgeneratedimage = `public/assets/${Date.now()}.png`;
    // const val = Date.now();
    // const image = imageResponse.data.data[0].b64_json;

    // added

    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
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
