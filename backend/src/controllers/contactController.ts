import { Request, Response } from "express";
import { sendContactEmail } from "../utils/email";

export const handleContactSubmit = async (req: Request, res: Response): Promise<void> => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({
      status: "error",
      message: "Please fill out all required fields: name, email, message.",
    });
    return;
  }

  try {
    const success = await sendContactEmail(name, email, message);
    
    if (success) {
      res.status(200).json({
        status: "success",
        message: "Your message has been sent successfully! Hrithik will get back to you soon.",
      });
    } else {
      res.status(500).json({
        status: "error",
        message: "There was an issue sending your email. Please try again later.",
      });
    }
  } catch (error) {
    console.error("Contact Form Controller Error:", error);
    res.status(500).json({
      status: "error",
      message: "An internal server error occurred while processing your message.",
    });
  }
};
