import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const contactData = contactSchema.parse(req.body);
      
      // Check if SendGrid API key is available
      if (!process.env.SENDGRID_API_KEY) {
        return res.status(500).json({ 
          error: 'E-posta servisi yapılandırılmamış' 
        });
      }

      // Set SendGrid API key
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      // Prepare email content
      const msg = {
        to: 'info@berkomakina.com',
        from: 'noreply@berkomakina.com', // This should be a verified sender
        subject: `Website İletişim Formu: ${contactData.subject}`,
        html: `
          <h2>Yeni İletişim Formu Mesajı</h2>
          <p><strong>İsim:</strong> ${contactData.name}</p>
          <p><strong>E-posta:</strong> ${contactData.email}</p>
          <p><strong>Telefon:</strong> ${contactData.phone}</p>
          <p><strong>Konu:</strong> ${contactData.subject}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${contactData.message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Send email
      await sgMail.send(msg);
      
      res.json({ success: true, message: 'Mesaj başarıyla gönderildi' });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        error: 'Mesaj gönderilemedi', 
        details: error instanceof Error ? error.message : 'Bilinmeyen hata'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
