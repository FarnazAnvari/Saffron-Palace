# 🌿 Saffron Palace — Restaurant Website

A modern, responsive restaurant website built with **Next.js**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Tech Stack

| Tool         | Version          |
| ------------ | ---------------- |
| Next.js      | 16.x (Turbopack) |
| React        | 19.x             |
| TypeScript   | 5.x              |
| Tailwind CSS | 4.x              |

---

## 📁 Project Structure

src/

├── app/

│ ├── layout.tsx # Root layout

│ ├── page.tsx # Home page

│ ├── menu/

│ │ └── page.tsx # Menu page

│ ├── about/

│ │ └── page.tsx # About page

│ ├── contact/

│ │ └── page.tsx # Contact page

│ └── reservation/

│ └── page.tsx # Reservation page

├── components/

│ ├── Navbar.tsx

│ ├── Footer.tsx

│ ├── MenuCategories.tsx

│ └── …

├── types/

│ └── index.ts # Shared TypeScript interfaces

└── public/

└── images/ # Static assets

🛠️ Getting Started
Prerequisites
Node.js >= 18.x
npm or yarn
Installation
bash

git clone https://github.com/your-username/saffron-palace.git

cd saffron-palace

npm install

Development
bash

npm run dev

Open http://localhost:3000 in your browser.

Build
bash

npm run build

npm start

📄 Pages

Home — Hero section, featured dishes, intro
Menu — Full menu organized by category
About — Story, values, and team
Contact — Location map, contact info
Reservation — Table booking form

✨ Features

Fully responsive design (mobile-first)
Optimized images with next/image (LCP-aware)
Type-safe data with shared TypeScript interfaces
Google Maps embed for restaurant location
Smooth scroll behavior

🌐 Deployment

Deployed on Vercel.

📝 License
MIT — free to use and modify.
