import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        // Отправляем ответ и прекращаем выполнение мидлвара
        res.status(401).json({ error: 'No authorization.' });
        return;
    }
    // Если авторизация есть, продолжаем выполнение
    next();
};
