// EmailJS Configuration
// INSTRUCTIONS TO SET UP:
// 1. Go to https://www.emailjs.com/
// 2. Sign up for a free account
// 3. Add an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from Account > General
// 6. Replace the values below with your actual EmailJS credentials

const EMAIL_CONFIG = {
    // Your EmailJS Public Key (from Account > General)
    PUBLIC_KEY: 'BVnftCDbdGtSJwAG6',

    // Your EmailJS Service ID (from Email Services)
    SERVICE_ID: 'service_gxxamho',

    // Your EmailJS Template ID (from Email Templates)
    TEMPLATE_ID: 'template_aa9h06c'
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMAIL_CONFIG;
}
