import { UserInfoModel } from "../models/UserInfo.model.js"


export const getUserInfo = async (req, res) => {
  try {
    const usersInfo = await UserInfoModel.find().populate("userId").exec();
    return res.status(200).json(usersInfo);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const updateUserInfo = async (req, res) => {
  const reqInfo = req.body;
  console.log(reqInfo)
  try {
    const userInfo = await UserInfoModel.findByIdAndUpdate({ _id: reqInfo.id }, reqInfo, { new: true });
    return res.status(201).json(userInfo);
  } catch (error) {
      return res.status(500).json({ error });
  }
}