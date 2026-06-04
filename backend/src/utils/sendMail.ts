import nodemailer from "nodemailer";
import dns from "dns";

const ipv4Lookup = (hostname: string, options: any, callback: any) => {
    return dns.lookup(hostname, { ...options, family: 4 }, callback);
};

export const sendOtpMail = async (email: string, otp: string) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        lookup: ipv4Lookup,
    } as any);

    // Premium HTML email template
    const htmlTemplate = `
        <div style="background-color: #fafafa; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; text-align: center;">
            <div style="max-width: 440px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 24px; padding: 40px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);">
                
                <!-- Styled Logo Header -->
                <div style="margin-bottom: 32px;">
                    <!--<div style="width: 48px; height: 48px; background-color: #09090b; border-radius: 16px; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center;">
                        <span style="color: #ffffff; font-size: 20px; font-weight: bold; line-height: 48px;"></span>
                    </div>-->
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

    const mailOptions = {
        from: `"Authentication Services" <${process.env.EMAIL}>`, // Adds a friendly sender name
        to: email,
        subject: "Verification COde from Hrithik", // Puts the OTP in the subject line (standard practice for fast-reading notifications)
        html: htmlTemplate
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error("Nodemailer Send Error:", error);
        return false;
    }
};
