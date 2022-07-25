import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import address from "./routers/Address.router.js";

const mongoAtlasUri =
  "mongodb+srv://admin:1@cluster0.swg4v.mongodb.net/huyentrang?retryWrites=true&w=majority";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/", address);


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
