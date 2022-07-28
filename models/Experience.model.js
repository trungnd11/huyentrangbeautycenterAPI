import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String
}, { timestamps: true });

export const ExperienceModel = mongoose.model("experience", ExperienceSchema);

