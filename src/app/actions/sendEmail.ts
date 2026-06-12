"use server";

import { Resend } from "resend";

export const sendEmailAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { error: "Missing required fields" };
  }

  // Ensure the API key is present
  if (!process.env.RESEND_API_KEY) {
    return { error: "Resend API Key is missing. Please add it to your .env.local file." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #111827; background-color: #ffffff;">
      <h2 style="margin: 0 0 30px; color: #111827; font-size: 24px; font-weight: 600;">Contact Form Submission</h2>
      
      <div style="margin-bottom: 30px;">
        <h3 style="margin: 0 0 15px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280; border-bottom: 1px solid #E5E7EB; padding-bottom: 8px;">1. Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 500; color: #374151; width: 100px;">Name</td>
            <td style="padding: 8px 0; color: #111827;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 500; color: #374151;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 500; color: #374151;">Subject</td>
            <td style="padding: 8px 0; color: #111827;">${subject}</td>
          </tr>
        </table>
      </div>
      
      <div style="margin-bottom: 30px;">
        <h3 style="margin: 0 0 15px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280; border-bottom: 1px solid #E5E7EB; padding-bottom: 8px;">2. Message</h3>
        <div style="background-color: #F3F4F6; padding: 20px; border-radius: 6px; white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #374151;">${message}</div>
      </div>
      
      <div style="margin-bottom: 40px;">
        <h3 style="margin: 0 0 15px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280; border-bottom: 1px solid #E5E7EB; padding-bottom: 8px;">3. Submission Details</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; color: #6B7280; width: 100px;">Date</td>
            <td style="padding: 6px 0; color: #374151;">${new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata', dateStyle: 'medium' })}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #6B7280;">Time</td>
            <td style="padding: 6px 0; color: #374151;">${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', timeStyle: 'short' })}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #6B7280;">Source</td>
            <td style="padding: 6px 0; color: #374151;">priyanshubindal.in</td>
          </tr>
        </table>
      </div>
      
      <div style="text-align: left;">
        <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background-color: #111827; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 15px;">Reply to Sender</a>
      </div>
    </div>
  `;

  try {
    // 1. Send Notification to Portfolio Owner
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Resend's default testing domain
      to: ["mr99soul@gmail.com"], // Hardcoded to the exact verified email address
      replyTo: email,
      subject: `New Portfolio Message: ${subject}`,
      html: htmlContent,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Fallback text
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { error: error.message };
    }

    // 2. Send Auto-Reply to the Sender
    const autoReplyHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #111827; background-color: #ffffff; line-height: 1.6;">
      <p style="font-size: 16px; margin-bottom: 20px;">Hi ${name},</p>
      
      <p style="font-size: 16px; margin-bottom: 20px;">Thank you for reaching out through my portfolio.</p>
      
      <p style="font-size: 16px; margin-bottom: 25px;">Your message has been successfully received and I'll review it as soon as possible.</p>
      
      <div style="background-color: #F9FAFB; border: 1px solid #E5E7EB; padding: 15px 20px; border-radius: 6px; margin-bottom: 30px;">
        <p style="margin: 0 0 4px; font-size: 14px; color: #6B7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Response Time</p>
        <p style="margin: 0; font-size: 16px; color: #374151;">Usually within 24–48 hours.</p>
      </div>
      
      <p style="font-size: 16px; margin-bottom: 40px;">Looking forward to connecting with you.</p>
      
      <div style="border-top: 1px solid #E5E7EB; padding-top: 30px;">
        <p style="font-size: 16px; margin: 0 0 15px;">Best Regards,</p>
        <p style="margin: 0 0 4px; font-size: 16px; font-weight: 600;">Priyanshu Bindal</p>
        <p style="margin: 0 0 4px; font-size: 14px; color: #6B7280;">Full Stack Engineer & App Developer</p>
        <p style="margin: 0;"><a href="https://priyanshubindal.in" style="color: #2563EB; text-decoration: none; font-size: 14px;">priyanshubindal.in</a></p>
      </div>
    </div>
    `;

    try {
      await resend.emails.send({
        from: "Priyanshu Bindal <onboarding@resend.dev>", // Resend's default testing domain
        to: [email],
        subject: "Message Received - Priyanshu Bindal",
        html: autoReplyHtml,
      });
    } catch (autoReplyError) {
      // Catch this error silently so the user still sees the "Success" animation even if the auto-reply gets blocked by Resend's free tier.
      console.warn("Auto-reply failed (Likely due to unverified domain on Resend Free Tier):", autoReplyError);
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Server Error:", error);
    return { error: error.message || "An unexpected error occurred." };
  }
};
