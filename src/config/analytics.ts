// Analytics Configuration
export const analyticsConfig = {
  // Google Analytics 4
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",

  // Microsoft Clarity
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || "",

  // Site URL
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://dwantech.com",

  // Analytics enabled
  enabled: process.env.NODE_ENV === "production",
};

// Google Analytics Events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

// Microsoft Clarity Events
export const clarityEvent = (eventName: string, data?: unknown) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("event", eventName, data);
  }
};

// Common tracking events
export const trackingEvents = {
  // Contact form submission
  contactFormSubmit: () => {
    trackEvent("contact_form_submit");
    clarityEvent("contact_form_submit");
  },

  // WhatsApp click
  whatsappClick: () => {
    trackEvent("whatsapp_click");
    clarityEvent("whatsapp_click");
  },

  // Service page view
  servicePageView: (serviceName: string) => {
    trackEvent("service_page_view", { service_name: serviceName });
    clarityEvent("service_page_view", { service_name: serviceName });
  },

  // Portfolio view
  portfolioView: (projectName: string) => {
    trackEvent("portfolio_view", { project_name: projectName });
    clarityEvent("portfolio_view", { project_name: projectName });
  },

  // CTA click
  ctaClick: (ctaName: string, location: string) => {
    trackEvent("cta_click", { cta_name: ctaName, location });
    clarityEvent("cta_click", { cta_name: ctaName, location });
  },
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
  }
}
