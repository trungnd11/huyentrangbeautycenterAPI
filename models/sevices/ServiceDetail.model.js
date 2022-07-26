import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ServiceDetailSchema = new Schema(
  {
    details: String,
    serviceTitle: {
      type: Schema.Types.ObjectId,
      ref: "service",
    },
  },
  { timestamps: true }
);

export const ServiceDetailModel = mongoose.model("service-detail", ServiceDetailSchema);