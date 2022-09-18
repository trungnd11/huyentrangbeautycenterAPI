import { AddressModel } from "../models/Address.model.js";

export const getAddress = async (req, res) => {
  try {
    const address = await AddressModel.find();
    res.status(200).json(address);
  } catch (error) {
    res.status(200).json({ error });
  }
}

export const createAddress = async (req, res) => {
  try {
    const address = new AddressModel(req.body);
    await address.save();
    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export const updateAddress = async (req, res) => {
  try {
    const updateAdress = await AddressModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(201).json(updateAdress);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const deleteAdress = await AddressModel.remove({ _id: req.params.id });
    res.status(200).json(deleteAdress);
  } catch (error) {
    res.status(500).json({ error });
  }
};