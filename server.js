import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 3001);

app.use(express.json({ limit: '1mb' }));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, projectDetails } = req.body || {};

    if (!name || !email || !projectDetails) {
      return res.status(400).json({ message: 'Name, email, and project details are required.' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactEmail) {
      return res.status(500).json({
        message: 'The contact form email configuration is missing on the server.',
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const textBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      company ? `Company: ${company}` : '',
      '',
      'Project Details:',
      projectDetails,
    ]
      .filter(Boolean)
      .join('\n');

    await transporter.sendMail({
      from: `${process.env.FROM_NAME || 'ZuniTech Solutions'} <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: textBody,
      html: `
        <h2>New Contact Form Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails.replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.status(200).json({ message: 'Your message has been sent successfully.' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(500).json({ message: `Message delivery failed: ${message}` });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'Contact API is running.' });
});

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`);
});
