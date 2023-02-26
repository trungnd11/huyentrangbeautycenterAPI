import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

const Schema = mongoose.Schema;

const BannerSchema = new Schema({
  img: {
    type: String,
    required: true
  },
  title: String,
  content: String,
  nameImg: String
}, { timestamps: true });

BannerSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

BannerSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

BannerSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const BannerModel = mongoose.model("banner", BannerSchema);