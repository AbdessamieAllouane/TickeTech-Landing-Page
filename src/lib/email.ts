import { Resend } from "resend";
import { ContactFormData } from "./validation/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAdminNotification(data: ContactFormData) {
  return resend.emails.send({
    from: "TickeTech <noreply@yourdomain.com>",
    to: "abdessamie.allouane@inttic.dz",
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  });
}

export async function sendUserConfirmation(data: ContactFormData) {
  return resend.emails.send({
    from: "TickeTech <noreply@yourdomain.com>",
    to: data.email,
    subject: "Thank you for contacting TickeTech",
    html: `
      <h2>Thank you for reaching out!</h2>
      <p>Dear ${data.name},</p>
      <p>We've received your message and will get back to you shortly.</p>
      <br/>
      <p>Best regards,</p>
      <p>The TickeTech Team</p>
    `,
  });
}
