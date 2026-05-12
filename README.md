# Soumyadip Singha - Personal Portfolio

A professional, interactive, and fully responsive 3D web developer portfolio built with React, Three.js, and GSAP. It features a customizable 3D avatar, smooth scroll animations, and dynamic UI elements, designed to highlight skills, projects, and professional experience.

---

## 🌟 Features

- **3D Interactive Avatar:** A fully animated 3D character powered by `@react-three/fiber` and `@react-three/drei`.
- **Advanced Animations:** Smooth, engaging animations and scroll effects built using GSAP (GreenSock).
- **Responsive Design:** Fully responsive layout ensuring a perfect experience on desktop, tablet, and mobile devices.
- **Dynamic Projects Showcase:** Clean layout for displaying recent work and professional projects.
- **Tech Stack Visualization:** An animated layout of the current technologies and tools utilized.
- **Interactive Resume & Contact Integration:** Direct download links for resumes and integrated contact details.
- **Secure Architecture:** Encrypted 3D model assets decrypted securely at runtime via environment variables.

---

## 🛠 Tech Stack

- **Framework:** React 18 (Vite)
- **Language:** TypeScript
- **3D Rendering:** Three.js, React Three Fiber, React Three Drei
- **Animations:** GSAP (ScrollSmoother, ScrollTrigger, TextPlugin)
- **Styling:** Custom CSS (Dynamic and aesthetic dark theme)
- **Deployment & Analytics:** Vercel Analytics

---

## 🚀 Installation & Local Setup

### Prerequisites

Ensure you have Node.js and npm (or pnpm/yarn) installed.

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Simply-Coder-start/Personal-Portfolio-Website.git
   cd Personal-Portfolio-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory based on the `.env.example` file and add the required model decryption password.
   ```bash
   cp .env.example .env
   ```
   *Note: Contact the repository owner if you need access to the 3D model decryption password.*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

---

## 📂 Folder Structure

```
├── public/                 # Static assets (3D models, fonts, draco decoder)
├── src/
│   ├── assets/             # Images and global styling assets
│   ├── components/         # Reusable React components (About, Contact, Work, etc.)
│   │   ├── Character/      # 3D Avatar component and decryption logic
│   │   └── styles/         # Component-specific CSS modules
│   ├── context/            # React context providers
│   ├── data/               # Static data structures
│   ├── utils/              # Helper functions and GSAP configurations
│   ├── App.tsx             # Main Application wrapper
│   ├── index.css           # Global design tokens and utilities
│   └── main.tsx            # React application entry point
├── .env.example            # Template for environment variables
├── package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite configuration
```

---

## 📸 Screenshots

*(Add screenshots of your portfolio here - Home page, Work section, etc.)*

---

## 🔮 Future Improvements

- Add a dark/light theme toggle.
- Integrate a headless CMS for dynamic project updates.
- Improve 3D model loading times with advanced compression.
- Integrate an interactive blog section.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Designed & Developed by **[Soumyadip Singha](https://github.com/Simply-Coder-start)**
