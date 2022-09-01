import { UserModel } from "../models/User.model.js"

export const UserValidator = (req, res, next) => {
  req.check("email", "Invalid email.").isEmail();
  req.check("email", "Email is required.").not().isEmpty();
  req.check("username", "Username is required.").not().isEmpty();
  req
    .check("username", "Username must be more than 6 characters")
    .isLength({ min: 6 });
  req.check("password", "Password is required.").not().isEmpty();
  req
    .check("password", "Password must be more than 6 characters")
    .isLength({ min: 6 });
  req
    .check("passwordConfirm", "Password confirm is required.")
    .not()
    .isEmpty();
  req.check("passwordConfirm", "Password mismatch").equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    const firstErr = errors.map(err => err.msg)[0];
    return res.status(400).json({ error: firstErr });
  }
  next();
}