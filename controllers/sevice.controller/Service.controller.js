import { ServiceDetailModel } from "../../models/sevices/ServiceDetail.model.js";
import { ServiceModel } from "../../models/sevices/Service.model.js";
import { ServiceTypeModel } from "../../models/sevices/ServiceType.model.js";

export const getService = async (req, res) => {
  try {
    const service = await ServiceModel.find()
      .populate("serviceType")
      .exec();
    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getServiceLimit = async (req, res) => {
  try {
    const service = await ServiceModel.find().limit(req.params.limit);
    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const findServiceByType = async (req, res) => {
  try {
    const services = await ServiceModel.find().or({
      serviceType: req.params.type,
    });
    return res.status(200).json(services);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const createService = async (req, res) => {
  const reqService = req.body;
  const serviceType = await ServiceTypeModel.findById({
    _id: reqService.serviceType,
  });
  try {
    const service = new ServiceModel({
      name: reqService.name,
      image: reqService.image,
      description: reqService.description,
      serviceType: serviceType._id,
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
  const serviceType = await ServiceTypeModel.findById({_id: reqService.serviceType});
  
  try {
    const service = await ServiceModel.findOneAndUpdate(
      { _id: reqService._id },
      {
        name: reqService.name,
        image: reqService.image,
        description: reqService.description,
        serviceType: serviceType._id,
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
