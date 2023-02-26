import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

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

BlogSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

BlogSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

BlogSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const BlogModel = mongoose.model("blog", BlogSchema);