# Portfolio Website

[![Deploy to GitHub Pages](https://github.com/[your-username]/[your-username].github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/[your-username]/[your-username].github.io/actions/workflows/deploy.yml)

A modern, responsive portfolio website built with React and Tailwind CSS. Features bilingual support (German/English), dark mode, and automatic deployment to GitHub Pages.

## 🌟 Features

- 🌓 Dark/Light mode toggle
- 🌐 Bilingual support (DE/EN)
- 🤖 Automated deployment

## 🛠 Tech Stack

- React
- Tailwind CSS
- Vite
- GitHub Actions
- Lucide Icons

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/[your-username].github.io.git
cd [your-username].github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🔧 Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Local Development

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:5173](http://localhost:5173) in your browser

### Project Structure

```
portfolio-website/
├── .github/workflows/   # GitHub Actions workflows
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── App.jsx        # Main App component
│   └── index.jsx      # Entry point
└── ... configuration files
```

## 📝 Customization

1. Update personal information in `src/components/Portfolio.jsx`
2. Modify theme colors in `tailwind.config.js`
3. Add/modify content in both languages in the `content` object

## 📦 Deployment

The website automatically deploys to GitHub Pages when pushing to the main branch.

Manual deployment:
```bash
npm run build
git add .
git commit -m "Update portfolio"
git push origin main
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```