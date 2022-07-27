import { ServiceTypeModel } from "../../models/sevices/ServiceType.model.js";

export const getServiceType = async (req, res) => {
  try {
    const service = await ServiceTypeModel.find();
    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const createServiceType = async (req, res) => {
  try {
    const serviceType = new ServiceTypeModel(req.body);
    await serviceType.save();
    return res.status(201).json(serviceType);
  } catch (error) {
    return res.status(500).json({ error });
  }
}