import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  avatar: String
}, { timestamps: true });

export const UserModel = mongoose.model("user", UserSchema);