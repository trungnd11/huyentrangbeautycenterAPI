import experss from "express";
import { createBanner, getBanner } from "../controllers/Banner.controller.js";

const banner = experss.Router();

banner.get("/banners", getBanner);
banner.post("/banners", createBanner);

export default banner;