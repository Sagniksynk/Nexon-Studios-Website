# Nexon Studios Website

A premium, high-performance website for **Nexon Studios**, a creative agency specializing in immersive Roblox experiences and modern web applications.

![Nexon Studios Banner](public/logo.png)

## 🚀 Overview

This project is a modern, responsive website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. It features a dark-themed, glassmorphic design with advanced animations, interactive 3D elements, and a focus on performance and aesthetics.

## ✨ Key Features

*   **Modern Design System**: Dark mode aesthetic with custom "Nexon Orange" (`#ff6e42`) accents, glassmorphism effects, and dynamic gradients.
*   **Interactive Graphics**:
    *   **3D Globe**: A fully interactive 3D globe on the contact page using `cobe` and `framer-motion`.
    *   **Animated Particles**: Custom particle backgrounds and orb effects.
*   **Smooth Animations**: comprehensive usage of `framer-motion` for page transitions, scroll reveals, and micro-interactions.
*   **Responsive Layouts**:
    *   **Hero Section**: Dynamic text reveals and flexbox-based calls-to-action.
    *   **Work Portfolio**: Filterable project grid with tilt-enabled cards.
    *   **Services**: Grid layout highlighting core offerings (Roblox, Web, UI/UX).
    *   **Testimonials**: Infinite scrolling marquee of client reviews.
*   **Performance Optimized**: Server-side rendering (SSR) with Next.js App Router.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **3D Elements**: [Cobe](https://github.com/shuding/cobe)
*   **Deployment**: Vercel (Recommended)

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with global providers
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── work/             # Portfolio page
│   └── contact/          # Contact page
├── components/
│   ├── layout/           # Navbar, Footer, Background
│   ├── sections/         # Page sections (Hero, Services, CTA, etc.)
│   ├── ui/               # Reusable UI atoms (Buttons, Cards, Globe)
│   └── work/             # Portfolio specific components
└── lib/                  # Utilities (cn, etc.)
```

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Sagniksynk/Nexon-Studios-Website.git
    cd Nexon-Studios-Website
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
