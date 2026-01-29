# Wilson Racket 3D Landing Page

A premium, scroll-driven 3D product landing page showcasing a Wilson tennis racket with smooth animations and modern design.

![Wilson Racket Landing Page](https://img.shields.io/badge/React-18.3.1-blue) ![Three.js](https://img.shields.io/badge/Three.js-Latest-green) ![Vite](https://img.shields.io/badge/Vite-6.0.3-purple)

## ✨ Features

- **Scroll-Driven 3D Animations**: Interactive 3D racket model that transforms as you scroll
- **5 Animation Phases**: Smooth transitions through different viewing angles and zoom levels
- **Premium Loading Screen**: Animated spinner with gradient effects while model loads
- **Premium Design**: Deep space color scheme with glassmorphism effects
- **Responsive Layout**: Optimized for all screen sizes
- **Performance Optimized**: 60fps smooth animations with throttled scroll events
- **Modern Tech Stack**: Built with React, Three.js, and React Three Fiber

## 🚀 Live Demo

**[View Live Demo →](https://3-d-racket-landing-page.vercel.app/)**

Experience the interactive 3D racket with scroll-driven animations in action!

## 🛠️ Tech Stack

- **React 18.3.1** - UI framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Vite** - Build tool and dev server

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/zubairmetabox/3D-Racket-Landing-Page.git
cd 3D-Racket-Landing-Page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── RacketModel.jsx       # 3D racket model with scroll animations
│   ├── RacketScene.jsx       # 3D scene setup with lighting
│   ├── Loader.jsx            # Loading screen component
│   ├── Loader.css            # Loader styles
│   ├── Section.jsx           # Reusable content section component
│   └── Section.css           # Section styles
├── hooks/
│   └── useScrollProgress.js  # Custom hook for scroll tracking
├── App.jsx                   # Main application component
├── main.jsx                  # Application entry point
└── style.css                 # Global styles and design system

public/
└── Racket.glb                # 3D racket model file
```

## 🎨 Design Features

### Color Palette
- **Primary Background**: Deep space blues (#0a1628, #1a2942)
- **Accent Colors**: Bright cyan (#00d4ff) and blue (#4a9eff)
- **Text**: White with varying opacity for hierarchy

### Visual Effects
- Premium loading screen with animated spinner rings
- Film grain texture overlay
- Radial gradient glows
- Glassmorphism on interactive elements
- Smooth fade-in animations for content sections
- Custom scrollbar styling

## 🎯 Animation Phases

The 3D racket transforms through 5 distinct phases as you scroll:

1. **Hero (0-20%)**: Initial view with gentle rotation
2. **Zoom (20-40%)**: Racket scales up and rotates
3. **Feature Focus (40-60%)**: Close-up view with detailed rotation
4. **Detail View (60-80%)**: Showcasing specific angles
5. **Final (80-100%)**: Return to hero composition

## 🔧 Customization

### Changing the 3D Model
Replace `public/Racket.glb` with your own GLB/GLTF model and update the path in `RacketModel.jsx`:

```javascript
const { scene } = useGLTF('/your-model.glb');
```

### Adjusting Animation Speed
Modify the scroll progress ranges in `RacketModel.jsx`:

```javascript
if (scrollProgress < 0.2) {
    // Adjust this range to change animation timing
}
```

### Customizing Colors
Update CSS variables in `style.css`:

```css
:root {
    --bg-primary: #0a1628;
    --accent-blue: #4a9eff;
    /* Add your custom colors */
}
```

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚡ Performance

- **60fps** smooth animations
- **Throttled scroll events** using requestAnimationFrame
- **Optimized 3D rendering** with React Three Fiber
- **Fast initial load** with model preloading
- **Efficient re-renders** with React hooks

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Zubair**
- GitHub: [@zubairmetabox](https://github.com/zubairmetabox)

## 🙏 Acknowledgments

- Wilson for the racket design inspiration
- Three.js community for excellent documentation
- React Three Fiber team for the amazing React integration

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ using React and Three.js
