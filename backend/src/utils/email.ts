import { Resend } from 'resend';
import 'dotenv/config';

if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined in the environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOTPEmail = async (toEmail: string, otp: string): Promise<boolean> => {
    try {
        // Premium HTML email template
        const htmlTemplate = `
            <div style="background-color: #fafafa; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; text-align: center;">
                <div style="max-width: 440px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 24px; padding: 40px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);">
                    
                    <!-- Styled Logo Header -->
                    <div style="margin-bottom: 32px;">
                        <!-- Professional Lock PNG Icon -->
                        <img 
                            src="https://img.icons8.com/ios-filled/100/09090b/lock.png" 
                            width="44" 
                            height="44" 
                            alt="Security Lock" 
                            style="display: block; margin: 0 auto 16px auto;" 
                        />
                        <h2 style="color: #09090b; font-size: 20px; font-weight: 600; margin: 0; text-transform: uppercase; letter-spacing: 0.05em;">Verify Access</h2>
                        <p style="color: #71717a; font-size: 12px; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 0.1em;">Secure Authentication Code</p>
                    </div>

                    <!-- Main Body -->
                    <div style="border-top: 1px solid #f4f4f5; border-bottom: 1px solid #f4f4f5; padding: 24px 0; margin-bottom: 24px;">
                        <p style="color: #3f3f46; font-size: 14px; line-height: 1.5; margin: 0 0 20px 0;">
                            Use the secure, one-time verification code below to authorize your session. 
                        </p>
                        
                        <!-- Monospaced Code Box -->
                        <div style="background-color: #f4f4f5; border: 1px solid #e4e4e7; border-radius: 16px; padding: 20px; text-align: center; letter-spacing: 12px; font-family: 'Courier New', Courier, monospace; font-size: 36px; font-weight: bold; color: #09090b; margin: 10px 0;">
                            ${otp}
                        </div>
                        
                        <p style="color: #71717a; font-size: 11px; margin: 16px 0 0 0;">
                            This code is highly confidential and will expire in <strong>5 minutes</strong>.
                        </p>
                    </div>

                    <!-- Footer / Safety warning -->
                    <div>
                        <p style="color: #a1a1aa; font-size: 10px; line-height: 1.4; margin: 0; text-transform: uppercase; letter-spacing: 0.05em;">
                            If you did not request this authorization code, you can safely ignore this email or update your credentials.
                        </p>
                    </div>
                </div>
                
                <!-- Small Outer Footer -->
                <p style="color: #d4d4d8; font-size: 9px; text-transform: uppercase; letter-spacing: 0.2em; margin-top: 24px;">
                    Encryption Grade Security
                </p>
            </div>
        `;

        await resend.emails.send({
            from: process.env.SENDER_EMAIL!,
            to: toEmail,
            subject: "Verification Code from Hrithik", // Cleaned up subject line
            html: htmlTemplate
        });
        console.log("OTP sent successfully", );
        return true;
    } catch (error) {
        console.error('Error sending email with Resend:', error);
        return false;
    }
};

export const sendContactEmail = async (senderName: string, senderEmail: string, message: string): Promise<boolean> => {
    try {
        const htmlTemplate = `
            <div style="background-color: #fafafa; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; padding: 32px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);">
                    
                    <h2 style="color: #09090b; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; border-bottom: 1px solid #f4f4f5; padding-bottom: 16px; text-align: center;">
                        New Portfolio Connection Message
                    </h2>
                    
                    <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: bold; text-transform: uppercase; color: #71717a; letter-spacing: 0.05em;">From</p>
                        <p style="margin: 0; font-size: 15px; color: #09090b; font-weight: 600;">${senderName}</p>
                        <p style="margin: 4px 0 0 0; font-size: 13px; color: #3b82f6;">${senderEmail}</p>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: bold; text-transform: uppercase; color: #71717a; letter-spacing: 0.05em;">Message Body</p>
                        <div style="background-color: #f4f4f5; border: 1px solid #e4e4e7; border-radius: 12px; padding: 20px; color: #09090b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                    </div>

                    <p style="color: #a1a1aa; font-size: 10px; margin-top: 24px; text-align: center; border-top: 1px solid #f4f4f5; padding-top: 16px; letter-spacing: 0.05em; text-transform: uppercase;">
                        Portfolio Auto-Mailer
                    </p>
                </div>
            </div>
        `;

        await resend.emails.send({
            from: process.env.CONTACT_SENDER!,
            to: 'littlehrithik9594@gmail.com',
            subject: `New Connection from ${senderName} via Portfolio`,
            html: htmlTemplate
        });
        return true;
    } catch (error) {
        console.error('Error sending contact email with Resend:', error);
        return false;
    }
};
