import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  code: String
}, { timestamps: true });

export const TokenModel = mongoose.model("token", TokenSchema);