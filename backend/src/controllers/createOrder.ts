import { instance } from "../utils/razorpay";
import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const createOrder = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        const { amount } = req.body;

        const order = await instance.orders.create({
            amount: amount * 100,
            currency: "INR",
            receipt: `rcpt_${userId.substring(0, 8)}_${Date.now() % 1000000}`,
        });

        await prisma.transaction.create({
            data: {
                razorpayOrderId: order.id,
                provider: "RAZORPAY",
                amount: amount,
                status: 'PENDING',
                userId: userId
            }
        });

        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Order creation failed" });
    }
};