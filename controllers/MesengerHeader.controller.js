import { MesengerHeaderModel } from "../models/MesengerHeader.model.js";

export const getMesengerHeader = async (req, res) => {
  try {
    const mesengers = await MesengerHeaderModel.findOne(
      {},
      {},
      { sort: { createdAt: -1 } }
    );
    res.status(200).json(mesengers);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export const createMesengerHeader = async (req, res) => {
  try {
    const mesengers = new MesengerHeaderModel(req.body);
    await mesengers.save();
    res.status(201).json(mesengers);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateMesengerHeader = async (req, res) => {
  try {
    const mesengers = await MesengerHeaderModel.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true });
    res.status(201).json(mesengers);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteMesengerHeader = async (req, res) => {
  try {
    const mesenger = await MesengerHeaderModel.remove({ _id: req.body._id });
    res.status(200).json(mesenger);
  } catch (error) {
     res.status(500).json({ error });
  }
}