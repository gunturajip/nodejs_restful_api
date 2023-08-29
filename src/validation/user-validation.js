import Joi from "joi";

const registerUserVadidation = Joi.object({
    username: Joi.string().max(100).required(),
    password: Joi.string().max(100).required(),
    name: Joi.string().max(100).required()
});

export {
    registerUserVadidation
}