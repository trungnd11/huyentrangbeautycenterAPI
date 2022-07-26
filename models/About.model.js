import mongoose from "mongoose"

const Schema = mongoose.Schema;

const AboutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    avatar: {
      type: String
    },
    description1: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    description3: {
      type: String,
      required: true,
    },
    description4: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const AboutModel = mongoose.model("about", AboutSchema);