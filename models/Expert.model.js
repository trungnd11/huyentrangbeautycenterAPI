import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

const Schema = mongoose.Schema;

const ExpertSchema = new Schema(
  {
    avatar: String,
    name: {
      type: String,
      required: true,
    },
    positon: String,
    description: String,
    linkFb: String,
    linkZalo: String,
    linkInsta: String,
    linkMess: String,
  },
  { timestamps: true }
);

ExpertSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

ExpertSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

ExpertSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const ExpertModel = mongoose.model("expert", ExpertSchema);