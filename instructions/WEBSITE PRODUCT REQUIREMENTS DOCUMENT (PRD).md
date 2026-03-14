# **WEBSITE PRODUCT REQUIREMENTS DOCUMENT (PRD)**

## **Project Overview**

Build a **fast, SEO-optimized static website** for a business/portfolio.

The site must contain informational pages with images, text sections, a call button that opens the phone dialer, and an embedded map.

The website must prioritize:

* high performance  
* clean UI design  
* mobile responsiveness  
* strong SEO structure  
* compatibility with Vercel static hosting

Target performance goals:

* Page load time under **1.2 seconds**  
* Google PageSpeed score **above 90**  
* Fully responsive on mobile, tablet, and desktop  
* Clean semantic HTML structure

---

# **1\. Technology Stack**

The website must be built using the following stack:

Framework: Static HTML website  
Styling: Tailwind CSS  
JavaScript: Minimal vanilla JavaScript only

Hosting compatibility target: Vercel static hosting

Images must be optimized using **WebP format**.

Maximum page size must remain **under 2MB**.

Avoid large JavaScript libraries.

---

# **2\. Website Pages**

The website must contain the following pages:

Home Page  
About Page  
Services Page  
Contact Page

Each page must have:

* consistent header  
* consistent footer  
* internal navigation links

---

# **3\. Layout Components**

The site layout should use modular sections.

## **Header**  **I want a button showing allows user to switch between 3 languages (english,hindi,assamese) \!\! must be functional\!\!**

Contains:

* logo on the left  
* navigation menu  
* mobile hamburger menu

Navigation links:

Home  
About  
Services  
Contact

---

## **Hero Section (Home Page)**

Contains:

* large headline  
* short supporting description  
* call-to-action button

Example button text:

Call Now

---

## **Services Section**

Display services as **cards**.

Each card should contain:

* icon or image  
* service title  
* short description

Recommended number of services:

3 to 6 services.

---

## **About Section**

Contains:

* business description  
* supporting image  
* brief company story

---

## **Contact Section**

Contains:

* phone number  
* call button  
* address  
* embedded Google Map  
* email

---

## **Footer**

Footer must contain:

* navigation links  
* copyright notice  
* contact information

---

# **4\. Call Button Requirement**

The call button must open the phone dialer on mobile devices.

Example implementation:

href="tel:+91XXXXXXXXXX"

Button label:

Call Now

This button should appear in:

* hero section  
* contact section

---

# **5\. SEO Requirements**

Each page must contain proper SEO metadata.

Required elements:

Title tag  
Meta description  
Canonical URL  
OpenGraph metadata

Example metadata structure:

meta name="description" content="Business service description"

meta property="og:title" content="Business Name"

link rel="canonical" href="https://domain.com/page"

---

# **6\. HTML Structure Requirements**

The HTML must follow semantic structure.

Example hierarchy:

H1 for main title  
H2 for section headings  
H3 for subsection titles

Avoid skipping heading levels.

---

# **7\. Performance Requirements**

The website must follow strict performance rules.

Images must:

* be compressed  
* use WebP format  
* support lazy loading

Avoid heavy animation libraries.

Avoid large JavaScript frameworks.

Critical CSS should be minimized.

Total page size must remain **under 2MB**.

---

# **8\. Responsive Design Requirements**

The site must use a **mobile-first design approach**.

Recommended breakpoints:

Desktop layout: around 1200px container width  
Tablet breakpoint: around 768px  
Mobile layout: around 375px

Navigation should collapse into a **hamburger menu** on mobile.

---

**9\. Folder Structure**

The final project must follow this structure.

project/

index.html  
about.html  
services.html  
contact.html

css/  
style.css

js/  
script.js

images/

sitemap.xml  
robots.txt

All internal links must work correctly.

---

# **10\. Deployment Requirements**

The final output must be deployable on **Vercel static hosting**.

Requirements:

* static files only  
* no PHP  
* no server-side runtime  
* no backend framework

---

# **11\. Required Content Inputs**

The following information will be provided later by the user.

Logo  
Phone number  
Business address  
Images  
About text

The AI system must integrate these elements into the layout.

---

# **12\. Deliverables**

The final output must include:

* fully functional static website  
* responsive design  
* SEO-ready HTML pages  
* optimized images and code  
* organized folder structure  
* ready-to-deploy project

The project must be directly deployable to **Vercel** without modification.

