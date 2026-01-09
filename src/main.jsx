import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>

    <App />
    </HelmetProvider>
  </StrictMode>,
)

/*  REMOVE PRELOADER ONCE REACT IS READY */
const loader = document.getElementById("app-loader");
if (loader) {
  loader.classList.add("opacity-0");
  setTimeout(() => loader.remove(), 700);
}