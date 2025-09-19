# 🌐 Ranjeet Karmakar | Code. Consult. Create.

This is the source code for my personal portfolio website, showcasing my skills, projects, and ways to get in touch.  
The site is designed with **modern UI/UX**, smooth animations, and responsiveness across devices.

---

## 🚀 Features

- **Hero Section**  
  Introduction with animated headings and CTA buttons.

- **About Section**  
  Short professional bio with a clean glass-morphism card.

- **Skills Section**  
  Infinite horizontal slider displaying technical skills & tools.

- **Collaborate Section**  
  Interactive circular rotator with a "Hire Me" button.

- **Projects Section**  
  Project showcase with GitHub and live demo links.

- **Contact Section**  
  Contact form powered by [EmailJS](https://www.emailjs.com/) with SweetAlert2 feedback.

- **Back to Top Button**  
  Interactive hover tilt effect with smooth scroll.

- **Footer**  
  Social media links (GitHub, LinkedIn, Twitter/X).

---

## 🛠️ Tech Stack

- **Frontend**: [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS), [TailwindCSS](https://tailwindcss.com/)  
- **Animations**: [GSAP](https://gsap.com/), ScrollTrigger  
- **Icons**: [Font Awesome](https://fontawesome.com/)  
- **Email Service**: [EmailJS](https://www.emailjs.com/)  
- **Alerts**: [SweetAlert2](https://sweetalert2.github.io/)  
- **Hosting**: Compatible with Netlify, Vercel, GitHub Pages, or any static hosting.

---

## 📧 Contact Form Setup

This site uses **EmailJS** for the contact form. To set it up:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Get your **Service ID**, **Template ID**, and **Public Key**.
3. Update them in `main.min.js` (or your JS source if not minified):

   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");

   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
     from_name: name,
     from_email: email,
     message: message,
   });

---

This project is licensed under the MIT License – feel free to use, modify, and share with attribution.
