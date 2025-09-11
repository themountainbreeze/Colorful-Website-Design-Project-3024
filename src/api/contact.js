import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export async function sendContactEmail(formData) {
  try {
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
          New Contact Form Submission - The Mountain Breeze Galle
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
        </div>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Booking Details</h3>
          <p><strong>Number of Guests:</strong> ${formData.guests}</p>
          <p><strong>Check-in Date:</strong> ${formData.checkIn || 'Not specified'}</p>
          <p><strong>Check-out Date:</strong> ${formData.checkOut || 'Not specified'}</p>
        </div>
        
        <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
          <p>This email was sent from the contact form on The Mountain Breeze Galle website.</p>
          <p>Please respond to the customer at: ${formData.email}</p>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contact@themountainbreezegalle.com',
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: emailContent,
      replyTo: formData.email
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}
