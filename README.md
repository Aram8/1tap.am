# 1tap.am — Smart NFC Tapping Cards (Coming Soon)

A high-speed, modern, unscrollable **Coming Soon** web experience for **[1tap.am](https://1tap.am)** — NFC tapping cards for restaurants, cafes, and personal networking.

Built with pure Vanilla HTML5, modern CSS3, and ES6 JavaScript. Instant 100/100 Lighthouse score, GPU-accelerated 60/120fps animations, zero build steps, and ready for instant deployment to **Vercel** via **GitHub**.

---

## 🎨 Design System
- **Theme**: Crisp White canvas with an electric **Ocean Tide Gradient** palette (`#0284c7`, `#06b6d4`, `#14b8a6`, `#032b43`).
- **Typography**: Google Fonts [*Plus Jakarta Sans*](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [*Outfit*](https://fonts.google.com/specimen/Outfit).
- **Layout**: Strictly unscrollable (`100dvh`, `overflow: hidden`) on mobile, tablet, and desktop.
- **Highlights**:
  - Prominently placed large **1tap.am** logo on the left.
  - Dedicated **"Already near you at"** social hub with buttons for **Instagram**, **LinkedIn**, and **WhatsApp**.
  - Fast animated sliding frame: **"Coming soon to the Global network..."** with kinetic marquee track and VIP card reservation form.
  - Interactive **3D Luxury NFC Card** with cursor-responsive tilt, contactless wave chip, and realistic tap ripple simulation.

---

## ⚡ Quick Customization

### 1. Adding Your Social Media Links
You can update your links in **either** of these two places:

**Option A (Recommended): In `main.js` (lines 11-15):**
```javascript
const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/your_handle',
  linkedin: 'https://linkedin.com/company/your_company',
  whatsapp: 'https://wa.me/374XXXXXXXX', // Your phone number with country code
};
```

**Option B: Directly in `index.html` (lines 80-115):**
Look for the `href="https://..."` inside each `.social-btn` anchor tag.

---

### 2. Replacing the Logo
The image folder is located at [`assets/`](file:///Users/aram/Documents/1tap.am/assets/).
- Simply drop your own JPG logo into that folder and name it **`logo.jpg`** (overwriting the placeholder).
- If you use a different filename (e.g. `assets/my-logo.png` or `assets/brand.jpg`), simply update the `src` attribute in [`index.html`](file:///Users/aram/Documents/1tap.am/index.html#L42):
  ```html
  <img src="assets/YOUR_FILE_NAME.jpg" alt="1tap.am Logo" class="brand-logo-img">
  ```

---

## 🚀 Local Testing

You can simply double-click `index.html` in Finder to open it in your browser, or run a local dev server:

```bash
# Run local dev server on port 3000
npm start
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel via GitHub (Step-by-Step)

### Step 1: Initialize Git & Push to GitHub
In your terminal:
```bash
cd /Users/aram/Documents/1tap.am

git init
git add .
git commit -m "Initial commit: 1tap.am coming soon page"
git branch -M main

# Create a new repository on your GitHub (e.g. 1tap-am) and run:
git remote add origin https://github.com/YOUR_USERNAME/1tap-am.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** ➔ **"Project"**.
3. Import your `1tap-am` GitHub repository.
4. Framework Preset: Leave as **Other** (it's pure static, zero build configuration required).
5. Click **Deploy**. Your site will be live on a `*.vercel.app` URL in under 10 seconds!

### Step 3: Connect your domain `1tap.am`
1. In your Vercel project dashboard, navigate to **Settings** ➔ **Domains**.
2. Type `1tap.am` and click **Add**.
3. Vercel will give you two DNS records (e.g., an `A` record pointing to `76.76.21.21` and a `CNAME` for `www.1tap.am`).
4. Log in to your domain registrar where you bought `1tap.am`, add those DNS records, and Vercel will automatically issue a free SSL certificate!
