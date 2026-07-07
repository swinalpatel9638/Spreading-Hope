# Spreading Hope

A responsive, multi-page website for **Spreading Hope**, a nonprofit providing housing,
education, and emergency relief to Syrian families affected by years of conflict.

Built with plain HTML, CSS, and JavaScript — no build step, no framework.

## Pages
- `index.html` — Home
- `housing.html` — Housing initiatives
- `education.html` — Education programs
- `emergency.html` — Emergency relief
- `donation.html` — Donation form
- `about-us.html` — About the organization

## Tech & features
- Semantic, accessible HTML5
- Single shared stylesheet (`css/style.css`) using CSS custom properties for the theme
- Single shared script (`js/script.js`): mobile nav, hero carousel, donation amount
  selector, and scroll-reveal animations (all guarded per page)
- Typography: Bricolage Grotesque (headings) + Plus Jakarta Sans (body), via Google Fonts
- Fully responsive (mobile / tablet / desktop)
- Newsletter, contact, and donation forms submit via Formspree
- Respects `prefers-reduced-motion`

## Project structure
```
spreading-hope/
├── index.html
├── housing.html
├── education.html
├── emergency.html
├── donation.html
├── about-us.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/        <-- add your image files here
```

## Setup
1. Copy your existing `images/` files into the `images/` folder (filenames must match
   what's referenced in the HTML, e.g. `logo.svg`, `Syria.jpg`, `housing7.jpg`, etc.).
2. Open `index.html` in a browser, or run a local server (e.g. `python3 -m http.server`).

## Recent changes in this pass
- **Home page**: fixed the cropped "Why donate?" photo (now keeps the top of the subject
  in frame via `object-position`), removed the duplicate "How We Help" cards section,
  changed the "Our Projects" card buttons from "Learn More" to "Donate Now" (linking to
  the donation page), removed the Accreditations and Newsletter sections to shorten the
  page, and removed a duplicate hero-carousel image that was also used on the Education
  page.
- **Housing page**: fixed the intro paragraph/button under the hero image so it's flush
  with the image's left edge instead of floating centered and narrower; removed the
  "Rebuild a Family's Life" section since it repeated the same earthquake statistics as
  the "Rebuilding Syria" section right below it.
- **Education page**: same alignment fix applied to the intro section under its hero
  image; the photo it shares with the home-page carousel was de-duplicated (see above).
  Photo quality on this page is unchanged — swap in your own higher-resolution images
  whenever you're ready and the layout will hold.
