import { ServiceDetailModel } from "../models/sevices/ServiceDetail.model.js";
import { ServiceModel } from "../models/sevices/Service.model.js";

export const getService = async (req, res) => {
  try {
    const service = await ServiceModel.find();
    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const createService = async (req, res) => {
  const reqService = req.body;
  try {
    const service = new ServiceModel({
      name: reqService.name,
      image: reqService.image,
      description: reqService.description,
    });
    await service.save();
    if (reqService.detailService) {
      const detailService = new ServiceDetailModel({
        details: reqService.detailService,
        serviceTitle: service._id
      });
      await detailService.save();
      return res.status(201).json({
        service,
        detailService
      })
    }
    return res.status(201).json(service);
  } catch (error) {
    return res.status(500).json({ error });
  } 
}

export const updateService = async (req, res) => {
  const reqService = req.body;
  try {
    const service = await ServiceModel.findOneAndUpdate(
      { _id: reqService._id },
      {
        name: reqService.name,
        image: reqService.image,
        description: reqService.description,
      },
      { new: true }
    );
    if (reqService.detailService) {
      const detailService = await ServiceDetailModel.findOneAndUpdate(
        { _id: reqService.detailService._id },
        {
          details: reqService.detailService.details,
        },
        { new: true }
      );
      return res.status(201).json({
        service,
        detailService,
      });
    }
    return res.status(201).json(service);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteService = async (req, res) => {
  try {
    await ServiceModel.remove({ _id: req.body._id });
    await ServiceDetailModel.remove({ serviceTitle: req.body._id });
    return res.status(200).json({
      succsess: "succsess",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}