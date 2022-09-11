import jwt from "jsonwebtoken";

export const generateToken = (user, secretSignature, tokenLife) => {
  const token = jwt.sign(
    {
      id: user._id,
    },
    secretSignature,
    {
      algorithm: "HS256",
      expiresIn: tokenLife,
    }
  );
  return token;
};

export const verifyToken = (token, secretKey) => {
  return jwt.verify(token, secretKey, (err, decode) => (decode ? decode : err));
}
