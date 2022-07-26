import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);

export const ServiceModel = mongoose.model("service", ServiceSchema);