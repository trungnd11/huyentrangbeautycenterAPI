import { BlogModel } from "../models/Blog.model.js";

export const getBlogs = async (req, res) => {
  const limit = req.query.limit;
  try {
    if (limit) {
      const response = await BlogModel.find()
        .sort({ createdAt: -1 })
        .limit(limit);
      return res.status(200).json(response);
    }
    const response = await BlogModel.find().sort({ createdAt: -1 });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const createBlog = async (req, res) => {
  const requestBlog = req.body;
  const userId = req.userId;
  try {
    const newBlog = new BlogModel({
      authen: userId,
      category: requestBlog.category,
      title: requestBlog.title,
      content: requestBlog.content,
    });
    await newBlog.save();
    return res.status(200).json(newBlog);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateBlog = async (req, res) => {
  const requestBlog = req.body;
  try {
    const updateBlog = await BlogModel.findOneAndUpdate(
      { _id: requestBlog._id },
      requestBlog,
      { new: true }
    );
    return res.status(200).json(updateBlog);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteBlog = async () => {
  try {
    await BlogModel.remove({ _id: req.params.id });
    return res.status(200).json({
      succsess: "succsess",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};