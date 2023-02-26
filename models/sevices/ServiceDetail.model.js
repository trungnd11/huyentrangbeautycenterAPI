import mongoose from "mongoose";
import { formatDateToString } from "../../utils/dateUtils.js";
import { removeFields } from "../../utils/modelUtils.js";

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

ServiceDetailSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

ServiceDetailSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

ServiceDetailSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const ServiceDetailModel = mongoose.model("service-detail", ServiceDetailSchema);