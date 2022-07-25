import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  apartmentNumber: { type: String, required: true },
  commune: { type: String, required: true },
  district: { type: String, required: true },
  conscious: { type: String, required: true },
}, { timestamps: true });

export const AddressModel = mongoose.model("Address", AddressSchema)