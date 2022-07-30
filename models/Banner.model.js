import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BannerSchema = new Schema({
  img: {
    type: String,
    required: true
  },
  title: String,
  content: String,
}, { timestamps: true });

export const BannerModel = mongoose.model("banner", BannerSchema);