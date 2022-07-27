import mongoose from "mongoose";
import { ServiceTypeModel } from "./ServiceType.model.js";

const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    price: Number,
    workingTime: Number,
    serviceType: {
      type: Schema.Types.ObjectId,
      ref: "service-type",
    },
  },
  { timestamps: true }
);

export const ServiceModel = mongoose.model("service", ServiceSchema);