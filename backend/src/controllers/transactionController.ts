import prisma from "../lib/prisma";
import { Request, Response } from "express";

export const getOrderHistory = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;

        const transactions = await prisma.transaction.findMany({
            where: { userId: userId },
            orderBy: { createdAt: 'desc' }
        });

        res.status(200).json({ transactions });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch order history" });
    }
};

export const markPaymentFailed = async (req: Request, res: Response) => {
    try {
        const { orderId } = req.body;

        await prisma.transaction.update({
            where: { razorpayOrderId: orderId },
            data: { status: "FAILED" }
        });

        res.status(200).json({ message: "Payment marked as failed" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update payment status" });
    }
};
