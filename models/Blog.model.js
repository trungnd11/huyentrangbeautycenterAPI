import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  authen: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const BlogModel = mongoose.model("blog", BlogSchema);