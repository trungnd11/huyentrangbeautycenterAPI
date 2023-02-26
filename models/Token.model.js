import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  code: String
}, { timestamps: true });

TokenSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

TokenSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

TokenSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const TokenModel = mongoose.model("token", TokenSchema);