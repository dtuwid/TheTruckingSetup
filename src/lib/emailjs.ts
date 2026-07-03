declare global {
  interface Window {
    emailjs?: {
      init: (config: { publicKey: string }) => void;
      send: (
        serviceId: string,
        templateId: string,
        params: Record<string, string>,
      ) => Promise<unknown>;
    };
  }
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export type ConsultationEmailData = {
  name: string;
  phone: string;
  email: string;
  business_stage: string;
  message: string;
};

export function isEmailjsConfigured() {
  return (
    SERVICE_ID &&
    TEMPLATE_ID &&
    PUBLIC_KEY &&
    SERVICE_ID !== 'service_9el9w7c' &&
    TEMPLATE_ID !== 'template_xj5hcnz' &&
    PUBLIC_KEY !== '3MKCkATC8G9ef3ZjZ'

  );
}

export async function sendConsultationEmail(data: ConsultationEmailData) {
  if (!isEmailjsConfigured()) {
    throw new Error('EmailJS is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.');
  }

  const emailjs = window.emailjs;
  if (!emailjs) {
    throw new Error('EmailJS SDK failed to load from CDN.');
  }

  emailjs.init({ publicKey: PUBLIC_KEY });

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    business_stage: data.business_stage,
    message: data.message || 'No additional message provided.',
    reply_to: data.email,
  });
}
