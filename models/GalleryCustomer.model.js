import mongoose from "mongoose";

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

export const GalleryCustomerModel = mongoose.model("gallery-customer", GalleryCustomerSchema);