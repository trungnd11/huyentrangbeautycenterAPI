import experss from "express";
import { createBanner, deleteBanner, getBanner, updateBanner } from "../controllers/Banner.controller.js";
import authJwt from "../middlewares/authJwt.js";

const banner = experss.Router();

banner.get("/banners", getBanner);
banner.post("/banners", [authJwt.verifyToken, authJwt.isAdmin], createBanner);
banner.put("/banners", [authJwt.verifyToken, authJwt.isAdmin], updateBanner);
banner.delete("/banners/:id",[authJwt.verifyToken, authJwt.isAdmin], deleteBanner);

export default banner;