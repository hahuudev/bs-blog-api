import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const create = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        title: Joi.string().min(6).required(),
        avatar: Joi.string().required(),
        description: Joi.string().min(10).required(),
        content: Joi.string().required(),
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
        title: Joi.string().min(10).required(),
        avatar: Joi.string().required(),
        description: Joi.string().required(),
        content: Joi.string().required(),
        commentCounts: Joi.number(),
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
