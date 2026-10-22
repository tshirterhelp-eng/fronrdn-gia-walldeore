/**
 * Business facts for GIA The Wall Decor.
 *
 * SOURCE OF TRUTH: the GIA Google Business Profile
 *   https://share.google/OUhiPoHQFcbRBihpk
 * and Justdial listing
 *   https://jsdl.in/DT-99UEXM4DZDW
 *
 * Neither profile could be read while this site was being built, so every
 * field below is intentionally left as `null`. The UI hides links and shows
 * a discreet "to be confirmed" note for any value that is still null — no
 * phone number, address, hours or rating is ever invented.
 *
 * To go live: copy the verified values from the profiles into this file.
 */
export const business = {
  name: 'GIA The Wall Decor',

  // e.g. '+91 98765 43210' (display) — digits only are derived for tel: links
  phone: null,

  // WhatsApp number in international format, digits only, e.g. '919876543210'
  whatsapp: null,

  email: null,

  // Each line of the street address as it appears on the Google profile
  addressLines: null, // e.g. ['Shop 12, Example Road', 'City, State 000000']

  // e.g. [{ days: 'Monday – Saturday', time: '10:00 am – 8:00 pm' }, { days: 'Sunday', time: 'Closed' }]
  hours: null,

  // Google Maps "Directions" link from the Business Profile
  mapsUrl: null,

  social: {
    instagram: null,
    facebook: null,
    pinterest: null,
    youtube: null,
  },
};

/**
 * Customer reviews — copy only genuine reviews, verbatim, from the Google
 * Business Profile, with the reviewer's publicly displayed name and rating.
 * While this array is empty the Reviews section is not rendered at all.
 *
 * Shape: { text: '…', author: 'Name as shown on Google', rating: 5 }
 */
export const reviews = [];

export const telHref = (phone) => (phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : null);

export const whatsappHref = (number, message = '') =>
  number
    ? `https://wa.me/${number.replace(/\D/g, '')}${message ? `?text=${encodeURIComponent(message)}` : ''}`
    : null;
