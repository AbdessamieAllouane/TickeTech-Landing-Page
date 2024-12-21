export const ContactConfirmationEmail = ({ name }: { name: string }) => (
  <div>
    <h2>Thank you for reaching out!</h2>
    <p>Dear {name},</p>
    <p>We&apos;ve received your message and will get back to you shortly.</p>
    <br />
    <p>Best regards,</p>
    <p>The TickeTech Team</p>
  </div>
);
