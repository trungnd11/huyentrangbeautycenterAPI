import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 6,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      trim: true,
      minlength: 6,
    },
    passwordConfirm: {
      type: String,
      trim: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
    },
    avatar: String,
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("user", UserSchema);
