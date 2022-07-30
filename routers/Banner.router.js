import experss from "express";
import { createBanner, getBanner, updateBanner } from "../controllers/Banner.controller.js";

const banner = experss.Router();

banner.get("/banners", getBanner);
banner.post("/banners", createBanner);
banner.put("/banners", updateBanner);

export default banner;