import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ServiceTypeSchema = new Schema({
  serviceType: {
    type: String,
    required: true
  },
  image: String,
  description: String
}, { timestamps: true });

export const ServiceTypeModel = mongoose.model("service-type", ServiceTypeSchema);