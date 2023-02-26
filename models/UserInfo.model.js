import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  fullName: String,
  phoneNumber: String,
  address: String,
  age: Number,
  job: String
}, { timestamps: true });

UserInfoSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

UserInfoSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

UserInfoSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const UserInfoModel = mongoose.model("userInfo", UserInfoSchema);