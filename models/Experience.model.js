import mongoose from "mongoose";
import { formatDateToString } from "../utils/dateUtils.js";
import { removeFields } from "../utils/modelUtils.js";

const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String
}, { timestamps: true });

ExperienceSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

ExperienceSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

ExperienceSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

export const ExperienceModel = mongoose.model("experience", ExperienceSchema);

