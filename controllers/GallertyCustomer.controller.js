import { GalleryCustomerModel } from "../models/GalleryCustomer.model.js";

export const getGalleryCustomer = async (req, res) => {
  try {
    const galleryCustomer = await GalleryCustomerModel.find();
    return res.status(200).json(galleryCustomer);
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export const getGalleryCustomerLimit = async (req, res) => {
  try {
    const galleryCustomer = await GalleryCustomerModel.find().limit(req.params.limit);
    return res.status(200).json(galleryCustomer);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const createGalleryCustomer = async (req, res) => {
  try {
    const galleryCustomer = new GalleryCustomerModel(req.body);
    await galleryCustomer.save();
    return res.status(201).json(galleryCustomer);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateGalleryCustomer = async (req, res) => {
  try {
    const galleryCustomer = await GalleryCustomerModel.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true });
    return res.status(201).json(galleryCustomer);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteGalleryCustomer = async (req, res) => {
  try {
    const galleryCustomer = await GalleryCustomerModel.remove({
      _id: req.params.id,
    });
    return res.status(200).json(galleryCustomer);
  } catch (error) {
    return res.status(500).json({ error });
  }
};