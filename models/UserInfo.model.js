import mongoose from "mongoose";

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

export const UserInfoModel = mongoose.model("userInfo", UserInfoSchema);