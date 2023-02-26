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

export const updateServiceType = async (req, res) => {
  try {
    const serviceType = await ServiceTypeModel.findOneAndUpdate({_id: req.body.id}, req.body, { new: true })
    return res.status(201).json(serviceType);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteServiceType = async (req, res) => {
  try {
    const serviceType = await ServiceTypeModel.remove({ _id: req.params.id })
    return res.status(200).json(serviceType);
  } catch (error) {
    return res.status(500).json({ error });
  }
};