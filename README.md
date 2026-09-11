# Christian James D. Garcia — Portfolio Website

A production-ready, editorial-themed portfolio website for **Christian James D. Garcia**, a 4th-year BSIT student at Innovative College of Science and Technology (expected graduation: 2027) and aspiring full-stack web/app developer.

Built strictly according to the design specification from `Page 1 (1).pdf` and content guidelines from `HOME LANDING PAGE.txt`.

---

## 🎨 Design System & Visual Tokens

The interface implements a warm cream editorial aesthetic in light mode and an oxide dark variant:

### Light Cream Theme (Default)
- **Background**: `#F3EADD`
- **Alternate Background**: `#EFE3D2`
- **Surface Cards**: `#FFFFFF`
- **Ink / Typography**: `#241D14`
- **Muted Text**: `#8A7A68`
- **Border / Rules**: `#E7DCCB`
- **Accent**: `#C4481F` (Rust Orange)
- **Soft Accent**: `#F7E3D7`

### Dark Oxide Theme
- **Background**: `#171310`
- **Alternate Background**: `#1F1A15`
- **Surface Cards**: `#201A15`
- **Ink / Typography**: `#F3EBDF`
- **Muted Text**: `#A69784`
- **Border / Rules**: `#342C24`
- **Accent**: `#E1744A`
- **Soft Accent**: `#3A2719`

### Typography Hierarchy
- **Display Headings**: `Fraunces` (Google Font)
- **Body & UI**: `Inter` (Google Font)
- **Badges, Kickers, & Metadata**: `Space Grotesk` (Google Font)

---

## 🛠️ Tech Stack

- **React 18** (Functional components, custom hooks)
- **Vite** (Next-generation fast frontend tooling)
- **Tailwind CSS** (Utility-first styling mapped to custom CSS variables)
- **Framer Motion** (Staggered hero entrance, animated filtering, modal transitions, scroll progress)
- **Lucide React** (Clean, minimalist icons)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# 1. Clone or navigate to the project directory
cd pro

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
The site will run locally at `http://localhost:3000` (or the port specified by Vite).

---

## 📬 Configuring the Contact Form (Formspree)

The contact form is built to submit directly to [Formspree](https://formspree.io):

1. Sign up at [formspree.io](https://formspree.io) and create a new form.
2. Copy your unique Formspree form ID (e.g., `https://formspree.io/f/xbjqvxyz`).
3. Create a `.env` file in the project root:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-actual-form-id
   ```
4. Restart the dev server or rebuild.

> **Note on Placeholder Safety**: If `VITE_FORMSPREE_ENDPOINT` is omitted or contains the default placeholder (`your-form-id`), the contact form will **not** pretend to send an email. Instead, it informs the user and displays Christian James' direct email (`c537640@gmail.com`).

---

## ☁️ Deploying to Vercel

The repository includes a preconfigured `vercel.json` for single-page routing:

### Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Via Vercel Web Dashboard
1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Under **Environment Variables**, add:
   - `VITE_FORMSPREE_ENDPOINT` = your Formspree endpoint URL
7. Click **Deploy**.

## GitHub Pages

The repository also includes `.github/workflows/deploy-pages.yml`. Every push to
`main` builds the Vite app and deploys `dist` to GitHub Pages.

1. Open the repository's **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Wait for the `Deploy portfolio to GitHub Pages` workflow to finish.

The public URL is:
`https://christian-james-garcia.github.io/webportfolioi/`

---

## 📂 Project Structure

```
├── public/
│   ├── asset/
│   │   └── forresume.png        # Confirmed profile photograph
│   ├── favicon.svg              # Custom CJG SVG favicon
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Button.jsx           # Editorial button variants (primary, secondary, text)
│   │   ├── CertificationCard.jsx# Credly badge visual, issuer, verify link
│   │   ├── ContactForm.jsx      # Formspree integration with placeholder detection
│   │   ├── Footer.jsx           # Editorial footer with back-to-top & copyright
│   │   ├── Navbar.jsx           # Sticky nav, scroll spy, theme toggle, mobile drawer
│   │   ├── ProjectCard.jsx      # Typography header badge, tags, action handlers
│   │   ├── ScrollProgress.jsx   # Top reading progress indicator
│   │   ├── SectionHeading.jsx   # Kicker + Fraunces heading + subtitle
│   │   ├── SkillCard.jsx        # S-01, W-02, D-03, T-04 categories with tags
│   │   └── Toast.jsx            # Dynamic feedback notifications
│   ├── data/
│   │   └── portfolio.js         # Centralized verified data
│   ├── sections/
│   │   ├── Hero.jsx             # Hero section with animated profile, tags, stats
│   │   ├── About.jsx            # Bio, career goal, quick facts card
│   │   ├── Skills.jsx           # 4 skill categories with staggered entrance
│   │   ├── Projects.jsx         # Filter tabs (All, Capstone, Web, Mobile, Database, UI/UX)
│   │   ├── Capstone.jsx         # Ibosys featured showcase, ERD preview diagram
│   │   ├── Experience.jsx       # Academic roles + formal OJT placeholder notice
│   │   ├── Certifications.jsx   # 5 verified Credly badge cards with live links
│   │   ├── Achievements.jsx     # Confirmed achievements list (01–04)
│   │   ├── Education.jsx        # ICST BSIT card with 2027 graduation badge
│   │   ├── ResumeSection.jsx    # CTA banner ("Looking for a developer with momentum?")
│   │   └── Contact.jsx          # Direct contact links with Copy buttons + Formspree form
│   ├── App.jsx                  # Single-page layout & state orchestrator
│   ├── main.jsx                 # React root mount
│   └── styles.css               # Design system variables, custom scrollbars, typography
├── index.html                   # SEO tags, Google Fonts, meta tags
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── .env.example
└── README.md
```

---

## 📋 Verified Information & Placeholders

- **Confirmed Credentials**:
  - Name: Christian James D. Garcia
  - Degree: BSIT, Innovative College of Science and Technology
  - Graduation: Expected 2027
  - Email: `c537640@gmail.com`
  - GitHub: `https://github.com/christian-james-garcia`
  - Facebook: `https://facebook.com/christianjamescjcj`
  - 5 Credly Credentials: Cisco (IT Customer Support Basics, Modern AI, Hardware Support, AI Fundamentals) & IBM SkillsBuild (AI Fundamentals).
- **Explicit Placeholders (No fabricated links or data)**:
  - **LinkedIn**: Labeled as "Pending setup".
  - **OJT / Internship**: Marked as "Coming soon" with formal explanation.
  - **Resume PDF**: Dedicated `resume.html` viewer with direct PDF download.
  - **Internal Projects**: Live demo & GitHub actions trigger informative toasts noting internal academic/enterprise repo status.
