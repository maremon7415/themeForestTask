# Justivo - Premium Legal Consultancy React Template

Justivo is a modern, high-performance React template designed for Law Firms, Legal Consultancies, and Corporate Agencies. Built with **React 19**, **Tailwind CSS**, and **GSAP**, it features a premium aesthetic with smooth scrolling and advanced animations.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Key Features

- **Premium Design**: Elegant typography (_Forum_ font family), sophisticated color palette (`#041C2C`, `#BE7D60`), and ample whitespace.
- **Advanced Animations**: Powered by **GSAP (GreenSock)** and **ScrollTrigger** for immersive entrance effects, sliders, and sticky elements.
- **Smooth Scrolling**: Integrated **Lenis** for a silky-smooth scrolling experience synchronized with GSAP animations.
- **Modern Tech Stack**: Built on the latest **React 19** and **Vite** for blazing fast performance.
- **Fully Responsive**: Meticulously crafted for all screen sizes, from large 1920px desktops to mobile devices.
- **Components**:
  - **Hero**: Spinning text ring, staggered reveal animations.
  - **Case Studies**: Sticky title layout with scrollable content.
  - **News Slider**: Custom animated carousel with gesture controls.
  - **Testimonials**: Interactive review section with star animations.
  - **Counters**: Animated statistical counters for achievements.

## 🛠 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/)
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: Custom SVG & assets

## 📦 Installation

1.  **Clone the repository**

    ```bash
    https://github.com/maremon7415/themeForestTask.git
    cd themeForestTask
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Start Development Server**

    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```bash
src/
├── components/          # Reusable UI components
│   ├── Hero.jsx        # Landing section with staggered animations
│   ├── About.jsx       # History timeline with scroll interactions
│   ├── CaseStudy.jsx   # Sticky layout component
│   ├── News.jsx        # GSAP-powered news slider
│   ├── Footer.jsx      # Animated multi-column footer
│   └── ...
├── pages/
│   └── Home.jsx        # Main landing page assembling all components
├── App.jsx             # Main entry with Lenis scroll setup
└── index.css           # Global styles & Tailwind imports
```

## 🎨 Customization

### Colors

The design system relies on a consistent palette defined in Tailwind classes:

- **Primary Dark**: `#041C2C` (Backgrounds, Footer)
- **Accent Gold**: `#BE7D60` (Buttons, Highlights)
- **Text/Base**: `#1A1A1A` (Headings) & `#555555` (Body)
- **Light BG**: `#F9F2F0` (Sections like Subscribe/SlidingText)

### Fonts

This project uses the **Forum** font family for headings to achieve its classic, editorial look. Ensure it is imported in `index.css` or `index.html`.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

_Built for the ThemeForest Task._
