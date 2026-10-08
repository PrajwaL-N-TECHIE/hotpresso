# Hotpresso Café Website Demo

A mobile-first, conversion-focused website sales demo created for **Hotpresso**, a cozy local café in Saravanampatti, Coimbatore, Tamil Nadu.

Created by **Buildicy**.

---

## ☕ Brand Details & Design System
- **Business Name:** Hotpresso
- **Aesthetic:** “Modern Coffeehouse Editorial”
- **Palette:**
  - Warm Ivory (`#F7F2EA`) & Oat Beige (`#EDE3D5`) alternating canvas
  - Espresso Text (`#241914`) & Coffee Brown (`#5A3325`)
  - Deep Roast Buttons (`#382017`) with Cream Text
  - Burnt Terracotta (`#B96545`) highlights & Muted Matcha (`#75805B`) accents
  - Soft Cream Cards (`#FFFDF8`) with Warm Taupe Borders (`#D8C8B7`)
- **Typography:** Fraunces (Headings) & Manrope (Body, Nav, Buttons, Prices)
- **Radii & Elevation:** 18px–24px rounded corners with restrained 8px soft shadows
- **Location:** Shop No. R14, Meena Food Court, Thudiyalur Road, near Thoppu Kari Virunthu, Vasantham Nagar, Saravanampatti, Coimbatore, Tamil Nadu 641035
- **Phone:** +91 81109 47362
- **Opening Hours:** Every day, 11:00 AM–11:00 PM
- **Price Positioning:** Affordable & budget-friendly
- **Services:** Dine-in, Takeaway, Delivery

---

## 🎯 Conversion Features
1. **Sticky Header & Mobile Drawer:** Fast navigation to Home, Favorites, Menu, Vibe, and Location.
2. **Fixed Mobile Action Bar:** 3 sticky bottom buttons on mobile devices:
   - **Call Now:** `tel:+918110947362`
   - **WhatsApp:** `https://wa.me/918110947362?text=...` (with pre-filled order inquiry message)
   - **Directions:** Direct Google Maps navigation link to Meena Food Court, Saravanampatti.
3. **Hero Section:** High-resolution beverage showcase, live open hours status pill, trust badges.
4. **Featured Craving Items:** Signature Hot Chocolate, Matcha Favourites, Freshly Brewed Coffee, and Coffee & Croissant combo cards with individual WhatsApp ordering CTAs.
5. **Interactive Filterable & Searchable Menu:** Tabs for Coffee, Hot Chocolate, Matcha, Snacks, and Combos with live search.
6. **Offer Banner:** Visually distinct promotional campaign slot for seasonal combos and student discounts.
7. **Why Hotpresso:** 4 benefit cards featuring clean SVG line icons.
8. **Our Vibe (Gallery):** High-definition photography showcasing seating, friends hanging out, hot chocolates, and bakery snacks, with interactive click-to-enlarge lightbox.
9. **Customer Reviews:** Editable testimonial cards clearly marked as sample content.
10. **Location & Contact:** Google Maps interactive embed, exact address, hours, and direct call/chat buttons.
11. **WhatsApp Conversion Banner:** Dedicated high-conversion green CTA section.
12. **Local SEO & Schema.org:** Pre-configured `CafeOrCoffeeShop` structured JSON-LD data and meta tags.

---

## 📁 File Structure
```
├── index.html           # Main HTML structure with semantic SEO tags & schema
├── css/
│   └── style.css        # Vanilla CSS design system (tokens, responsive breakpoints, typography)
├── js/
│   └── main.js          # Interactive features (mobile drawer, filterable menu, live hours, lightbox)
└── assets/
    └── images/          # High-resolution café & beverage photography (no watermarks)
        ├── hero-beverage.jpg
        ├── hot-chocolate.jpg
        ├── matcha-latte.jpg
        ├── brewed-coffee.jpg
        ├── coffee-croissant.jpg
        ├── vibe-interior.jpg
        ├── vibe-friends.jpg
        ├── vibe-marshmallow.jpg
        └── vibe-bakery.jpg
```

---

## 🚀 Running Locally
To run locally, you can use Python:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` or open on your mobile device on the local network.
