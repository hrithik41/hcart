import express from 'express';
import prisma from '../lib/prisma';

// User Created
const dashboard = async (req: express.Request, res: express.Response) => {
    console.log("Dashboard");
    try {
        const userId = (req as any).userId;
        console.log("User ID from request:", userId);

        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json({ message: "Dashboard", user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to get user' });
    }

};

export default dashboard;