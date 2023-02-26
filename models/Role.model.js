import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  name: String
}, { timestamps: true });

RoleSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

RoleSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

RoleSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const RoleModel = mongoose.model("role", RoleSchema);