import mongoose from "mongoose";

const Schema = mongoose.Schema;
const PhoneSchema = new Schema(
  {
    phoneNumber: {
      type: Number,
      required: true,
    },
    nameUser: {
      type: String,
      required: true,
    },
    position: {
      type: String
    }
  },
  { timestamps: true }
);

export const PhoneModel = mongoose.model("Phone", PhoneSchema);
