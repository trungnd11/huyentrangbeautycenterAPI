import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

const Schema = mongoose.Schema;

const GalleryCustomerSchema = new Schema({
  customer: {
    type: String,
    required: true
  },
  comment: String,
  img: {
    type: String,
    required: true
  }
}, { timestamps: true });

GalleryCustomerSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

GalleryCustomerSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

GalleryCustomerSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const GalleryCustomerModel = mongoose.model("gallery-customer", GalleryCustomerSchema);