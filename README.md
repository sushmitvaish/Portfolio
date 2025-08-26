# Sushmit Vaish - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, projects, and achievements as a Software Engineer. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Live Demo

Visit the live portfolio: [sushmitvaish.dev](https://sushmitvaish.dev)

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

## 🛠 Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: CSS animations with Intersection Observer API
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sushmitvaish/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── About.tsx           # About section with stats
│   │   ├── Achievements.tsx    # Awards and recognition
│   │   ├── Education.tsx       # Educational background
│   │   ├── Experience.tsx      # Professional experience
│   │   ├── Header.tsx          # Hero section with typing animation
│   │   ├── Navbar.tsx          # Navigation with scroll spy
│   │   ├── Projects.tsx        # Featured and other projects
│   │   ├── Publications.tsx    # Research publications
│   │   ├── ScrollToTop.tsx     # Scroll to top button
│   │   └── Skills.tsx          # Interactive skills showcase
│   ├── ui/                     # Shadcn/UI components
│   ├── globals.css             # Global styles and animations
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main page component
├── components.json             # Shadcn/UI configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project dependencies
```

## 🧩 Components

### Core Sections

- **Header**: Hero section with animated typing effect and social links
- **About**: Personal introduction with animated statistics
- **Experience**: Professional timeline with achievements and technologies
- **Projects**: Featured projects with live demos and source code links
- **Skills**: Interactive skill categories with progress bars
- **Education**: Academic background and coursework
- **Publications**: Research papers and publications
- **Achievements**: Awards and recognition timeline

### UI Components

- **Navbar**: Responsive navigation with scroll spy functionality
- **ScrollToTop**: Floating action button for smooth scroll to top
- **StatCard**: Animated statistics cards with intersection observer
- **SkillBar**: Interactive progress bars for skill visualization



## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy with automatic builds on push

### Other Platforms

This Next.js application can be deployed to:
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)
- Any platform that supports Node.js

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sushmitvaish/portfolio/issues).

### Development Workflow

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Sushmit Vaish - [sushmit.vaish@gmail.com](mailto:sushmit.vaish@gmail.com)

Project Link: [https://github.com/sushmitvaish/portfolio](https://github.com/sushmitvaish/portfolio)

---

⭐ If you found this project helpful, please give it a star!