import express from 'express';
import prisma from '../lib/prisma';

const dashboard = async (req: express.Request, res: express.Response) => {
    try {
        const user = (req as any).user;

        return res.status(200).json({ message: "Dashboard", user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to get user' });
    }

};

export default dashboard;