import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import expressValidator from "express-validator";
import morgan from "morgan";
import address from "./routers/Address.router.js";
import phoneNumber from "./routers/Phone.router.js";
import service from "./routers/services/Service.router.js";
import serviceType from "./routers/services/ServiceType.router.js";
import about from "./routers/About.router.js";
import banner from "./routers/Banner.router.js";
import experience from "./routers/Experience.router.js";
import expert from "./routers/Expert.router.js";
import galleryCustomer from "./routers/GalleryCustomer.router.js";
import user from "./routers/User.router.js";
import userInfo from "./routers/UserInfo.router.js";
import blog from "./routers/Blog.router.js";

dotenv.config();

const PORT = process.env.PORT || 5500;
const app = express();

const mongoAtlasUri = process.env.MONGGO_URI;

// const corsOptions = {
//   origin: "http://localhost:3000",
//   origin: "https://huyentrangtranbeautycenter.herokuapp.com/",
//   origin: "https://huyentrangbeautycenteradmin.herokuapp.com/",
// };

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use("/", user);
app.use("/", userInfo);
app.use("/", banner);
app.use("/", address);
app.use("/", phoneNumber);
app.use("/", service);
app.use("/", serviceType);
app.use("/", about);
app.use("/", experience);
app.use("/", expert);
app.use("/", blog);
app.use("/", galleryCustomer);

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(" Mongoose is connected");
    }
  );
  app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
  });
} catch (e) {
  console.log("could not connect", e);
  process.exit();
}
