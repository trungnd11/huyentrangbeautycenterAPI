import mongoose from "mongoose"
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

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

AboutSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

AboutSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

AboutSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const AboutModel = mongoose.model("about", AboutSchema);