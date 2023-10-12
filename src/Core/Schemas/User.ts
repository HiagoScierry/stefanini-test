import Joi from "joi";

export const UserSchemaValid = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    office: Joi.string().required(),
});