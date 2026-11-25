# AL TABAYUN | التباين — Corporate Website

Official bilingual (English / Arabic) corporate website for **AL TABAYUN | التباين — General Contracting & Supplies (للمقاولات العامة والتوريدات)**.

---

## Project Structure

```text
al-tabayun-website/
├── index.html                      # Main semantic HTML5 bilingual document
├── css/
│   └── style.css                   # External stylesheet (Navy/Gold/Teal palette, RTL/LTR, responsive grid)
├── js/
│   └── main.js                     # Bilingual toggle, mobile drawer, scroll spy, form validation & mailto
├── assets/
│   ├── logo-placeholder.svg        # Clearly marked placeholder for the original company logo
│   ├── ASSETS_INSTRUCTIONS.md      # Guide for placing the official logo & local images
│   └── images/                     # Folder for local project & hero photography
└── README.md                       # Setup, customization, and GitHub Pages deployment guide
```

---

## Mandatory Action Before Going Live: Insert Original Logo

In strict compliance with brand identity rules, no invented logo was generated. A clearly marked placeholder (`assets/logo-placeholder.svg`) is currently referenced in `index.html`.

1. Copy your original, unmodified **AL TABAYUN | التباين** logo file (e.g., `logo.png` or `logo.svg`) into the `assets/` folder.
2. In `index.html`, replace the two references to `assets/logo-placeholder.svg` (located in `<header>` and `<footer>`) with `assets/logo.png` (or your exact filename).
3. Do not crop, stretch, or recolor the logo—CSS (`object-fit: contain; height: 46px; width: auto;`) preserves its exact original aspect ratio.

---

## Image Sources & Local Replacement Guide

Currently, `index.html` uses verified high-resolution engineering and construction photographs from Unsplash (`images.unsplash.com`) with `loading="lazy"` and descriptive `alt` text:

| Section | Current External URL | Recommended Local Path |
| :--- | :--- | :--- |
| **Hero Background** | `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=85` | `assets/images/hero-engineering.jpg` |
| **About Us** | `https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80` | `assets/images/about-site.jpg` |
| **Project 01 (Fustat City)** | `https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80` | `assets/images/project-01-fustat.jpg` |
| **Project 02 (Knowledge City)** | `https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80` | `assets/images/project-02-knowledge-city.jpg` |
| **Project 03 (Hyde Park)** | `https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=900&q=80` | `assets/images/project-03-hyde-park.jpg` |

To replace the illustrative project visuals with real project photographs, save the photos into `assets/images/`, update the `src` attributes in `index.html`, and remove the `<span class="project-visual-note">` badge if using authentic on-site project photos.

---

## Contact Form Behavior (Static Hosting Compatible)

Because this website is engineered as a zero-dependency static site ready for GitHub Pages or standard web hosting without a server backend:
- `js/main.js` validates all fields (Name, Email, Phone, Subject, Message) in both English and Arabic.
- Upon valid submission, it constructs a structured `mailto:altapayun@gmail.com` link and opens the visitor's default email client with the inquiry prefilled, while displaying clear on-page guidance.

---

## Local Preview

No build tools or `npm install` steps are required:
1. Extract the project folder.
2. Double-click `index.html` to open it in any modern browser, or serve it locally with:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8080
   ```

---

## Publishing on GitHub Pages

1. Create a new repository on GitHub (e.g., `al-tabayun-website`).
2. Upload the contents of the `al-tabayun-website/` folder so that `index.html` is at the root of the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AL TABAYUN corporate website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/al-tabayun-website.git
   git push -u origin main
   ```
3. In your GitHub repository, navigate to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
6. Your live website will be published at `https://<your-username>.github.io/al-tabayun-website/`.
