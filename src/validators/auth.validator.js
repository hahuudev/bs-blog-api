import Joi from "joi";

export const login = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(4).max(20),
    });

    const result = schema.validate(req.body);

    try {
        if (result.error) {
            return res.status(401).json({ error: true, message: result.error.details[0].message });
        }
        next();
    } catch (err) {
        return res.status(500).json({
            err: true,
            message: new Error(err).message,
        });
    }
};
export const register = (req, res, next) => {
    const schema = Joi.object({
        fullname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(4).max(20),
    });

    const result = schema.validate(req.body);

    try {
        if (result.error) {
            return res.status(401).json({ error: true, message: result.error.details[0].message });
        }
        next();
    } catch (err) {
        return res.status(500).json({
            err: true,
            message: new Error(err).message,
        });
    }
};
