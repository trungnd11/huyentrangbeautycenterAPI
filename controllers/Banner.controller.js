import { BannerModel } from "../models/Banner.model.js";

export const getBanner = async (req, res) => {
  try {
    const banners = await BannerModel.find().sort({ updatedAt: -1 });
    return res.status(200).json(banners);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const createBanner = async (req, res) => {
  try {
    const banner = new BannerModel(req.body);
    await banner.save();
    return res.status(201).json(banner);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateBanner = async (req, res) => {
  try {
    const banner = await BannerModel.findOneAndUpdate({_id: req.body.id}, req.body, { new: true });
    return res.status(201).json(banner);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteBanner = async (req, res) => {
  try {
    await BannerModel.remove({ _id: req.params.id });
    return res.status(200).json({
      succsess: "succsess",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};