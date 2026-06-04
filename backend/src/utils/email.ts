import { Resend } from 'resend';
import 'dotenv/config';

if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined in the environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOTPEmail = async (toEmail: string, otp: string): Promise<boolean> => {
    try {
        await resend.emails.send({
            // On the free tier, Resend requires you to send FROM "onboarding@resend.dev"
            from: 'onboarding@resend.dev',
            to: toEmail,
            subject: 'Your Access Verification Code',
            html: `
                <div style="font-family: sans-serif; padding: 25px; border: 1px solid #e4e4e7; max-width: 400px; border-radius: 12px; background-color: #ffffff;">
                    <h2 style="color: #18181b; margin-top: 0;">Verify Your Account</h2>
                    <p style="color: #71717a; font-size: 14px;">Enter the following security code to authenticate your profile:</p>
                    <h1 style="font-size: 36px; letter-spacing: 6px; color: #09090b; margin: 24px 0; font-family: monospace;">${otp}</h1>
                    <p style="font-size: 11px; color: #a1a1aa; margin-bottom: 0;">This code is active for 5 minutes.</p>
                </div>
            `
        });
        return true;
    } catch (error) {
        console.error('Error sending email with Resend:', error);
        return false;
    }
};
