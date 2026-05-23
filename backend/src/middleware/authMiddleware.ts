import express from 'express';
import prisma from '../lib/prisma';
import { verifyAccessRefreshToken, generateTokens } from '../utils/jwt';

export const authMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Authorization header is required' });
        }

        const token = authHeader.split(' ')[1];
        const decodedToken = verifyAccessRefreshToken(token, "access") as any;

        const user = await prisma.user.findUnique({ where: { id: decodedToken.id } });
        if (!user) {
            return res.status(401).json({ error: 'User no longer exists' });
        }

        (req as any).userId = decodedToken.id;
        (req as any).user = user;
        next();

    } catch (error) {
        console.log("PS=>", error);
        return res.status(401).json({ error: 'Failed to authenticate user' });
    }
}