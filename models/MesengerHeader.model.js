import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MesengerHeaderSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const MesengerHeaderModel = mongoose.model("MesengerHeader", MesengerHeaderSchema);