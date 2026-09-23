/**
 * Google Analytics 4 (GA4) Event Tracking Utility
 * 
 * Reuses the existing gtag instance configured in index.html.
 * Safely verifies window.gtag availability before dispatching events.
 */

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, {
        page_path: window.location.pathname,
        ...parameters,
      });
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }
};

/**
 * Track inquiry / lead generation clicks (e.g., Contact, Start a Project, Book Consultation)
 */
export const trackInquiryClick = ({ link_location, button_text, destination = 'inquiry', ...extra }) => {
  trackEvent('inquiry_click', {
    link_location,
    button_text,
    destination,
    ...extra,
  });
};

/**
 * Track WhatsApp outbound chat clicks
 */
export const trackWhatsAppClick = ({ link_location, button_text = 'WhatsApp', destination = 'whatsapp', ...extra }) => {
  trackEvent('whatsapp_click', {
    link_location,
    button_text,
    destination,
    ...extra,
  });
};

/**
 * Track phone call clicks (tel: links)
 */
export const trackPhoneClick = ({ link_location, button_text, destination = 'phone', ...extra }) => {
  trackEvent('phone_click', {
    link_location,
    button_text,
    destination,
    ...extra,
  });
};

/**
 * Track Google Maps / Location link clicks
 */
export const trackMapClick = ({ link_location, button_text = 'Google Maps', destination = 'google_maps', ...extra }) => {
  trackEvent('map_click', {
    link_location,
    button_text,
    destination,
    ...extra,
  });
};

/**
 * Track successful inquiry/contact form submissions
 */
export const trackInquirySubmit = ({ link_location, form_name, ...extra }) => {
  trackEvent('inquiry_submit', {
    link_location,
    form_name,
    ...extra,
  });
};
