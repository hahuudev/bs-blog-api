import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const create = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        userId: Joi.string().required(),
        postId: Joi.string().required(),
        content: Joi.string().required(),
        parentId: Joi.string().allow(null),
    });

    const result = schema.validate(req.body);

    try {
        if (result.error) {
            return res.status(401).json({ error: true, message: result.error.details[0].message });
        }
        next();
    } catch (err: any) {
        return res.status(500).json({
            err: true,
            message: new Error(err).message,
        });
    }
};
export const update = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        userId: Joi.string().required(),
        postId: Joi.string().required(),
        content: Joi.string().required(),
        parentId: Joi.string().allow(null),
    });

    const result = schema.validate(req.body);

    try {
        if (result.error) {
            return res.status(401).json({ error: true, message: result.error.details[0].message });
        }
        next();
    } catch (err: any) {
        return res.status(500).json({
            err: true,
            message: new Error(err).message,
        });
    }
};
