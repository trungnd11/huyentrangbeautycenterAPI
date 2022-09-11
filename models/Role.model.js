import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  name: String
}, { timestamps: true });

export const RoleModel = mongoose.model("role", RoleSchema);