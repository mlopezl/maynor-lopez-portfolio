const baseUrl = import.meta.env.BASE_URL

export const featuredProjects = [
  { number: '01', title: 'Product List with Cart', description: 'Responsive catalog with quantity controls, a shopping cart and order confirmation.', tags: ['JavaScript', 'Responsive', 'UI State'], live: 'https://mlopezl.github.io/product-list-with-card/', repo: 'https://github.com/mlopezl/product-list-with-card', image: `${baseUrl}projects/product-cart.jpg`, accent: 'from-emerald-500/25 to-indigo-500/5' },
  { number: '02', title: 'Browser Extension Manager', description: 'Interactive dashboard with filters, extension controls and theme switching.', tags: ['JavaScript', 'Filters', 'Responsive UI'], live: 'https://mlopezl.github.io/my-version-of-browser-extensions-manager-ui-main-challenge/', repo: 'https://github.com/mlopezl/my-version-of-browser-extensions-manager-ui-main-challenge', image: `${baseUrl}projects/extension-manager.jpg`, accent: 'from-indigo-500/25 to-emerald-500/5' },
  { number: '03', title: 'Contact Form', description: 'Responsive form with input validation and clear error and success feedback.', tags: ['HTML5', 'CSS3', 'Validation'], live: 'https://mlopezl.github.io/contact-info-form-challenge/', repo: 'https://github.com/mlopezl/contact-info-form-challenge', image: `${baseUrl}projects/contact-form.jpg`, accent: 'from-emerald-400/20 to-cyan-500/5' },
]

export const otherProjects = [
  { title: 'Social Media Dashboard', category: 'Light and dark themes', live: 'https://mlopezl.github.io/social-media-dashboard-with-theme-switcher/', repo: 'https://github.com/mlopezl/social-media-dashboard-with-theme-switcher' },
  { title: 'Tip Calculator', category: 'Calculations and interaction', live: 'https://mlopezl.github.io/tip-calculator-app-challenge/', repo: 'https://github.com/mlopezl/tip-calculator-app-challenge' },
  { title: 'Conference Ticket Generator', category: 'Form and live preview', live: 'https://mlopezl.github.io/My-version-of-conference-ticket-generator-challenge/', repo: 'https://github.com/mlopezl/My-version-of-conference-ticket-generator-challenge' },
  { title: 'Insure landing page', category: 'Responsive layout', live: 'https://mlopezl.github.io/Insure-Landing-Page/', repo: 'https://github.com/mlopezl/Insure-Landing-Page' },
]
