const Joi = require("joi");
//VALIDATION
//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(4).max(30).required(),
    email: Joi.string().min(6).max(30).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
//login validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(30).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const createClassValidation = (data) => {
  const schema = Joi.object({
    code: Joi.string().min(6).max(50).required(),
    name: Joi.string().min(6).max(50).required(),
  });
  return schema.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.createClassValidation = createClassValidation;
