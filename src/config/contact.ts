// Contact configuration - SINGLE SOURCE OF TRUTH
// TODO: Almog - add your phone number here for lead tracking

export const contact = {
  // Phone number for lead tracking (Almog's system)
  phone: '', // TODO: Add phone number
  phoneFormatted: '', // TODO: Add formatted phone (e.g., 050-0000000)

  // WhatsApp - should link to Almog's tracking system
  whatsappNumber: '', // TODO: Add WhatsApp number (without +972 prefix, just 05XXXXXXXX)
  get whatsappLink() {
    return this.whatsappNumber ? `https://wa.me/972${this.whatsappNumber.replace(/^0/, '')}` : '';
  },

  // Email
  email: 'maayan@maayanlivne.co.il',

  // Address
  address: 'כביש ההר הירוק, יגור',

  // Social media (Or & Maayan's profiles - for EEAT)
  social: {
    linkedin: 'https://www.linkedin.com/in/orlivne/',
    instagram: 'https://www.instagram.com/maayanlivne/',
    facebook: 'https://www.facebook.com/maayanlivne/',
  }
};
