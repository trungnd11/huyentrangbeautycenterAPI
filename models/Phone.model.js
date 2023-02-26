import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

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

PhoneSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

PhoneSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

PhoneSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const PhoneModel = mongoose.model("Phone", PhoneSchema);
