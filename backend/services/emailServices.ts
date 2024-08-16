import nodemailer from 'nodemailer';

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    // Create a transporter using your email service provider's settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com for Gmail
      port: Number(process.env.EMAIL_PORT), // e.g., 587 for TLS
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to, // List of recipients
      subject, // Subject line
      text, // Plain text body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export const sendRegistrationEmail = async (userEmail: string) => {
  const subject = 'Welcome to Our Service!';
  const text = 'Thank you for registering. We are excited to have you on board!';
  
  await sendEmail(userEmail, subject, text);
};

export const sendPasswordResetEmail = async (userEmail: string, resetToken: string) => {
  const subject = 'Password Reset Request';
  const text = `You requested a password reset. Click the link below to reset your password:\n\n${process.env.CLIENT_URL}/reset-password/${resetToken}`;
  
  await sendEmail(userEmail, subject, text);
};