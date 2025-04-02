
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles.css'

// Add Font Awesome for icons
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://kit.fontawesome.com/a076d05399.js';
fontAwesomeScript.crossOrigin = 'anonymous';
document.head.appendChild(fontAwesomeScript);

// Add Google Fonts
const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto+Mono&display=swap';
document.head.appendChild(googleFontsLink);

createRoot(document.getElementById("root")!).render(<App />);
