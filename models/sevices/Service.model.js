import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
import { formatDateToString } from "../../utils/dateUtils.js";
import { removeFields } from "../../utils/modelUtils.js";

const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    price: Number,
    workingTime: Number,
    serviceType: {
      type: Schema.Types.ObjectId,
      ref: "service-type",
    },
  },
  { timestamps: true }
);

ServiceSchema.set("toJSON", {
  getters: true,
  transform: (_doc, ret) => removeFields(ret),
});

ServiceSchema.path('createdAt').get((createdAt) => formatDateToString(createdAt));

ServiceSchema.path('updatedAt').get((updatedAt) => formatDateToString(updatedAt));

ServiceSchema.plugin(mongoosePaginate);

export const ServiceModel = mongoose.model("service", ServiceSchema);