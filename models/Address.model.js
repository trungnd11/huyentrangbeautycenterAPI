import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  apartmentNumber: { type: String, required: true },
  commune: { type: String, required: true },
  district: { type: String, required: true },
  conscious: { type: String, required: true },
}, { timestamps: true });

AddressSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

AddressSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

AddressSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const AddressModel = mongoose.model("Address", AddressSchema)