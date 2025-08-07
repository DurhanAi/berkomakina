import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { t } = useLanguage();
  
  const formSchema = z.object({
    name: z.string().min(2, { message: t.nameMinError }),
    email: z.string().email({ message: t.emailError }),
    phone: z.string().min(10, { message: t.phoneMinError }),
    subject: z.string().min(2, { message: t.subjectMinError }),
    message: z.string().min(10, { message: t.messageMinError }),
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Mailto link oluştur
    const subject = encodeURIComponent(`Website İletişim Formu: ${data.subject}`);
    const body = encodeURIComponent(
      `İsim: ${data.name}\n` +
      `E-posta: ${data.email}\n` +
      `Telefon: ${data.phone}\n` +
      `Konu: ${data.subject}\n\n` +
      `Mesaj:\n${data.message}`
    );
    
    const mailtoLink = `mailto:info@berkomakina.com?subject=${subject}&body=${body}`;
    
    // E-posta uygulamasını aç
    window.location.href = mailtoLink;
    
    toast({
      title: t.messageSent,
      description: t.messageDescription,
    });
    
    form.reset();
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Berko Makina</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.contactTitle}
          </p>
          <div className="mt-4 max-w-2xl mx-auto">
            <div className="h-1 w-20 bg-primary rounded mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.contactSubtitle}
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.contactInfo}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{t.phone}</h4>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+905397691954" className="hover:text-primary">
                        +905397691954
                      </a>
                    </p>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+447732946723" className="hover:text-primary">
                        +44 7732 946 723
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{t.email}</h4>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:info@berkomakina.com" className="hover:text-primary">
                        info@berkomakina.com
                      </a>
                    </p>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:satis@berkomakina.com" className="hover:text-primary">
                        satis@berkomakina.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{t.address}</h4>
                    <p className="mt-1 text-gray-600">
                      Akçaburgaz Mh., 3029. Sk No:23<br />
                      34522 Esenyurt/İstanbul, Türkiye
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{t.workingHours}</h4>
                    <p className="mt-1 text-gray-600">
                      {t.workingHoursText.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index === 0 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                {t.contactForm}
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.nameLabel}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.namePlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.emailLabel}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={t.emailPlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.phoneLabel}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.phonePlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.subjectLabel}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.subjectPlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.messageLabel}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t.messagePlaceholder} className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-primary hover:bg-primary/90 transition-colors">
                      {t.sendButton}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="rounded-lg overflow-hidden shadow-lg relative">
            <iframe
              title="Berko Makina Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.542!2d28.75867!3d41.00025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa2b8b5c5c5c5%3A0x6c6c6c6c6c6c6c6c!2sAk%C3%A7aburgaz%20Mh.%2C%203029.%20Sk%20No%3A23%2C%2034522%20Esenyurt%2F%C4%B0stanbul%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str!4v1748266980000!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            <div className="absolute top-4 right-4">
              <a
                href="https://maps.app.goo.gl/sxpg4XpadqDQ67bh8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white shadow-lg rounded-lg text-gray-700 hover:text-primary hover:shadow-xl transition-all duration-300"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t.openInGoogleMaps}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}