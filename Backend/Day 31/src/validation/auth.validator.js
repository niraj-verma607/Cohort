import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  }

  res.status(400).json({
    errors: errors.array(),
  });
};

export const registerValidation = [
  body("username").isString().withMessage("Username must be a string"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage("Password must be at between 6 and 12 characters long"),
  body("password").custom((value) => {
    if (value.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!passwordRegex.test(value)) {
      throw new Error(
        "Password must contain at least one letter and one number",
      );
    }
    return true;
  }),
  validate,
];
