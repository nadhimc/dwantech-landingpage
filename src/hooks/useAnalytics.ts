import { useCallback } from "react";
import { trackingEvents } from "@/config/analytics";

export const useAnalytics = () => {
  const trackContactForm = useCallback(() => {
    trackingEvents.contactFormSubmit();
  }, []);

  const trackWhatsAppClick = useCallback(() => {
    trackingEvents.whatsappClick();
  }, []);

  const trackServiceView = useCallback((serviceName: string) => {
    trackingEvents.servicePageView(serviceName);
  }, []);

  const trackPortfolioView = useCallback((projectName: string) => {
    trackingEvents.portfolioView(projectName);
  }, []);

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    trackingEvents.ctaClick(ctaName, location);
  }, []);

  return {
    trackContactForm,
    trackWhatsAppClick,
    trackServiceView,
    trackPortfolioView,
    trackCTAClick,
  };
};
