# Al-Ghardaka Al-Dhahabiya - Water Filter Company Website

A static single-page Arabic website for **شركة الغردقة الذهبية (Al-Ghardaka Al-Dhahabiya)**, a Kuwait-based water filter company. Built with HTML5, Tailwind CSS, and vanilla JavaScript.

## Features

- **Product Catalog** — 10 water filter products with images, prices, features, and WhatsApp ordering
- **Maintenance Packages** — 3 maintenance plans (RO, Jumbo Double, Jumbo Triple)
- **Animated Testimonials** — Auto-rotating carousel with star ratings and scroll-reveal animations
- **Animated Hero** — Canvas water bubble effect with CSS wave animations
- **WhatsApp Integration** — One-click ordering and booking via WhatsApp
- **Google Maps Reviews CTA** — Link to Google Business Profile for reviews
- **Image Preview** — Click-to-zoom product image modal
- **SEO Optimized** — Meta tags, Open Graph, JSON-LD structured data (LocalBusiness schema)
- **Google Sheets Tracking** — Visitor analytics via Google Apps Script
- **RTL Arabic** — Full right-to-left support with Cairo font
- **Mobile Responsive** — Works on all screen sizes

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure & content |
| Tailwind CSS 3.4 | Utility-first styling (via CDN) |
| Vanilla JavaScript | Rendering, animations, tracking |
| Font Awesome 6 | Icons |
| Google Fonts (Cairo) | Arabic typography |
| Google Apps Script | Visitor tracking backend |
| ip-api.com | Visitor IP/geo detection |

## Files

| File | Description |
|------|-------------|
| `index.html` | Main website (single page) |
| `products.js` | Product data, maintenance packages, company info |
| `Code.gs` | Google Apps Script for tracking (deploy separately) |
| `Nlogo.png` | Company logo (favicon & navbar) |
| `*.jpg` / `*.png` | Product images |

## Deployment

This is a fully static site. Deploy anywhere that serves static files:

1. **GitHub Pages**
2. **Cloudflare Pages** (recommended)
3. **Netlify**
4. **Any static hosting**

No build step required — just push the files.

### Google Sheets Tracking (Optional)

1. Create a new Google Sheet at https://sheets.new
2. Name columns: Date | Time | Event | Detail | URL | IP | Country | User Agent
3. Open `Extensions → Apps Script`
4. Paste the code from `Code.gs`
5. Deploy as Web App (`Anyone` access)
6. Replace `TRACKING_URL` in `index.html` with your Web App URL

## Configuration

Edit `products.js` to modify:
- Products, prices, images, features
- Maintenance packages
- Company name, phone, social links

Edit `index.html` to modify:
- Design, colors, layout
- Testimonials
- SEO meta tags

## Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#0F2B4E` | Headings, sections |
| Gold | `#C9A84C` | Accents, buttons, highlights |
| Navy Dark | `#091C35` | Footer background |
| Cream | `#EAF0F6` | Page background |

## License

All rights reserved — شركة الغردقة الذهبية
