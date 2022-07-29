import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ExpertSchema = new Schema({
  avatar: String,
  name: {
    type: String,
    required: true
  },
  positon: String,
  description: String,
  linkFb: String,
  linkZalo: String,
  linkInsta: String
}, { timestamps: true });

export const ExpertModel = mongoose.model("expert", ExpertSchema);