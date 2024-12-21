import { Resend } from "resend";
import { ContactFormData } from "./validation/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = "abdessamie.allouane@inttic.dz";
const FROM_EMAIL = "noreply@ticketech.dz";

export async function sendAdminNotification(data: ContactFormData) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("Resend API key not found. Skipping email notification.");
    return null;
  }

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending admin notification:", error);
      return null;
    }

    return emailData;
  } catch (error) {
    console.error("Failed to send admin notification:", error);
    return null;
  }
}

export async function sendUserConfirmation(data: ContactFormData) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("Resend API key not found. Skipping user confirmation.");
    return null;
  }

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Thank you for contacting TickeTech",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${data.name},</p>
          <p>We've received your message and will get back to you shortly.</p>
          <br/>
          <p>Best regards,</p>
          <p>The TickeTech Team</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending user confirmation:", error);
      return null;
    }

    return emailData;
  } catch (error) {
    console.error("Failed to send user confirmation:", error);
    return null;
  }
}
