import { ContactFormData } from "../lib/validation/contact";

export const ContactNotificationEmail = ({
  submission,
}: {
  submission: ContactFormData;
}) => (
  <div>
    <h2>New Contact Form Submission</h2>
    <p>
      <strong>Name:</strong> {submission.name}
    </p>
    <p>
      <strong>Email:</strong> {submission.email}
    </p>
    <p>
      <strong>Company:</strong> {submission.company}
    </p>
    <p>
      <strong>Message:</strong> {submission.message}
    </p>
  </div>
);
