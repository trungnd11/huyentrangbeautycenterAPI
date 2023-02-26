import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

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
    roles: [{
      type: Schema.Types.ObjectId,
      ref: "role"
    }],
    avatar: String,
  },
  { timestamps: true }
);

UserSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

UserSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

UserSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const UserModel = mongoose.model("user", UserSchema);
