import mongoose from "mongoose";
import { formatDateToString } from "../../utils/dateUtils.js";
import { removeFields } from "../../utils/modelUtils.js";

const Schema = mongoose.Schema;

const ServiceTypeSchema = new Schema({
  serviceType: {
    type: String,
    required: true
  },
  image: String,
  description: String
}, { timestamps: true });

ServiceTypeSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

ServiceTypeSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

ServiceTypeSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const ServiceTypeModel = mongoose.model("service-type", ServiceTypeSchema);