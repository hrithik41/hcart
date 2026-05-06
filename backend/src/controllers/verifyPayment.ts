import express from 'express';
import prisma from '../lib/prisma';
import crypto from 'crypto';

export const verifyPayment = async (req: express.Request, res: express.Response) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = req.body;
        const userId = (req as any).userId;

        // 1. Generate the expected signature
        // The signature is HMAC-SHA256 of (order_id + "|" + payment_id) using the Key Secret
        const hmac = crypto.createHmac('sha256', process.env.SECRET!);
        hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
        const generated_signature = hmac.digest('hex');

        // 2. Compare signatures
        if (generated_signature === razorpay_signature) {
            // Success! 
            // Here you can update the user or create a record in your DB
            
            /* Example:
            await prisma.transaction.create({
                data: {
                    userId,
                    orderId: razorpay_order_id,
                    paymentId: razorpay_payment_id,
                    amount: amount / 100, // Convert back from paise
                    status: 'SUCCESS'
                }
            });
            */

            return res.status(200).json({ message: 'Payment verified successfully' });
        } else {
            console.error("Signature mismatch!");
            return res.status(400).json({ error: 'Payment verification failed' });
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        return res.status(500).json({ error: 'Failed to verify payment' });
    }
};