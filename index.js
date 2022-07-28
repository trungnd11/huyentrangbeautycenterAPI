import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import address from "./routers/Address.router.js";
import phoneNumber from "./routers/Phone.router.js";
import mesengerHeader from "./routers/MesengerHeader.router.js";
import service from "./routers/services/Service.router.js";
import serviceType from "./routers/services/ServiceType.router.js";
import about from "./routers/About.router.js";
import banner from "./routers/Banner.router.js";
import experience from "./routers/Experience.router.js";

const mongoAtlasUri =
  "mongodb+srv://admin:1@cluster0.swg4v.mongodb.net/huyentrang?retryWrites=true&w=majority";

dotenv.config();

const PORT = process.env.PORT || 5500;
const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/", banner);
app.use("/", address);
app.use("/", phoneNumber);
app.use("/", mesengerHeader);
app.use("/", service);
app.use("/", serviceType);
app.use("/", about);
app.use("/", experience);


try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );
  app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
  });
} catch (e) {
  console.log("could not connect", e);
  process.exit();
}
