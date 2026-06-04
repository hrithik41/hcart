// const generateOTP = async () => {
//     const otp = Math.floor(1000 + Math.random() * 9999).toString();

//     return otp;
// }

// export { generateOTP };

import crypto from "crypto";
import bcrypt from "bcrypt";

export const generateOTP = async (): Promise<string> => {
    return crypto.randomInt(1000, 9999).toString();
};

export const hashOTP = async (otp: string): Promise<string> => {
    return bcrypt.hash(otp, 10);
};

export const verifyHashedOTP = async (otp: string, hashedOtp: string): Promise<boolean> => {
    return await bcrypt.compare(otp, hashedOtp);
};