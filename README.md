# Swaraj Thakre — Cinematic Portfolio

<div align="center">
  <img src="./src/assets/Hero.webp" alt="Cinematic portrait of Swaraj Thakre" width="100%" />

  <br />
  <br />

  <p>A cinematic, responsive portfolio built to turn frontend work into an immersive digital experience.</p>

  <p>
    <a href="https://swarajthakre26.netlify.app/">Live site</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/SwarajThakre">GitHub</a>
    &nbsp;·&nbsp;
    <a href="https://www.linkedin.com/in/swarajst/">LinkedIn</a>
  </p>

  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

---

## About the project

This is the personal portfolio of **Swaraj Thakre**, a frontend developer focused on polished interfaces, responsive experiences, and practical digital products. It combines a cinematic visual direction with interactive motion, project storytelling, and a clear path for visitors to explore skills and get in touch.

## Highlights

- Cinematic hero section with a custom portrait and animated typography
- Interactive project carousel with keyboard, touch, and mouse interactions
- Full project archive with category filters
- 3D interactive ID card built with React Three Fiber
- Responsive sections for skills, services, contact, and social links
- React Router routes that work with direct links, including `/about` and `/all-projects`

## Built with

| Area        | Tools                                            |
| ----------- | ------------------------------------------------ |
| Framework   | React 19, TypeScript, React Router               |
| Styling     | Tailwind CSS v4, CSS, glassmorphism              |
| Motion & 3D | Framer Motion, Three.js, React Three Fiber, Drei |
| Tooling     | Vite, npm, Prettier                              |
| Deployment  | Netlify or Vercel                                |

## Run locally

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/SwarajThakre/Cinematic-Portfolio.git
cd Cinematic-Portfolio
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal. The local Vite server is configured to use port `8080` when it is available.

### Production build

```bash
npm run build
npm run preview
```

## Available scripts

| Command                | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the Vite development server              |
| `npm run build`        | Create an optimized production build in `dist` |
| `npm run preview`      | Preview the production build locally           |
| `npm run format`       | Format the project with Prettier               |
| `npm run format:check` | Check formatting without changing files        |

## Deploy

The project is ready to deploy as a static Vite application.

- **Vercel:** import the repository, use `npm run build` as the build command, and set `dist` as the output directory. The included `vercel.json` preserves React Router routes.
- **Netlify:** import the repository, build with `npm run build`, and publish the `dist` directory.

## Project structure

```text
src/
├── assets/              # Hero portrait and project imagery
├── components/          # Reusable interactive sections
├── data/                # Typed project data
├── pages/               # About and all-projects routes
├── App.tsx              # Application layout and routes
└── styles.css           # Global Tailwind theme and styles
```

## Connect

- Portfolio: [swarajthakre26.netlify.app](https://swarajthakre26.netlify.app/)
- Email: [swarajthakre.stud@gmail.com](mailto:swarajthakre.stud@gmail.com)
- GitHub: [@SwarajThakre](https://github.com/SwarajThakre)
- LinkedIn: [Swaraj Thakre](https://www.linkedin.com/in/swarajst/)
- Instagram: [@dollar_thakre26](https://www.instagram.com/dollar_thakre26/)

<div align="center">
  <sub>Designed and developed by Swaraj Thakre.</sub>
</div>
