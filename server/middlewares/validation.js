import { body, validationResult } from "express-validator";

export const signupValidation = [
    body("username").notEmpty().withMessage("Username required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password min 6 chars")
];

export const loginValidation = [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").notEmpty().withMessage("Password required")
];


export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};