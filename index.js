import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import expressValidator from "express-validator";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
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

const mongoAtlasUri =
  "mongodb+srv://admin:1@cluster0.swg4v.mongodb.net/huyentrang?retryWrites=true&w=majority";

dotenv.config();

const PORT = process.env.PORT || 5500;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(expressValidator());
app.use(cors());
app.use(
  session({
    secret: "work hard",
    cookie: {
      maxAge: new Date(Date.now() + 3600 * 1000 * 24),
    },
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongoUrl: mongoAtlasUri,
    }),
  })
);
app.use("/", user);
app.use("/", banner);
app.use("/", address);
app.use("/", phoneNumber);
app.use("/", service);
app.use("/", serviceType);
app.use("/", about);
app.use("/", experience);
app.use("/", expert);
app.use("/", galleryCustomer);

app.get("/get-session", (req, res) => {
  if (req.session.user) {
    return res.status(200).json({
      status: "success",
      userId: req.session.user._id,
    });
  }
  return res.status(200).json({ status: "error", session: "No session" });
});

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
