import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({ error: 'No authorization.' });
    }
    next();
};
