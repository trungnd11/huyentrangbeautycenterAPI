import express from "express";
import { createBlog, deleteBlog, getBlogs, updateBlog } from "../controllers/Blog.controller.js";
import authJwt from "../middlewares/authJwt.js";

const blog = express.Router();

blog.get("/blogs", getBlogs);
blog.post("/blog", [authJwt.verifyToken, authJwt.isAdmin], createBlog);
blog.put("/blog", [authJwt.verifyToken, authJwt.isAdmin], updateBlog);
blog.delete("/blog/:id", deleteBlog);

export default blog;