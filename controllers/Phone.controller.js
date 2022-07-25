import { PhoneModel } from "../models/Phone.model.js";

export const getPhone = async (req, res) => {
  try {
    const phoneNumber = await PhoneModel.find();
    res.status(200).json(phoneNumber);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export const createPhone = async (req, res) => {
  try {
    const phoneNumber = new PhoneModel(req.body);
    await phoneNumber.save();
    res.status(201).json(phoneNumber);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updatePhone = async (req, res) => {
  try {
    const phoneNumber = PhoneModel.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true });
    res.status(201).json(phoneNumber);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deletePhone = async (req, res) => {
  try {
    const deletePhone = await PhoneModel.remove({ _id: req.body._id });
    res.status(200).json(deletePhone);
  } catch (error) {
    res.status(500).json({ error });
  }
};