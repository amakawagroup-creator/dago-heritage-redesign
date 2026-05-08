import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Handle SPA redirect from 404.html (for static hosts like GitHub Pages)
const spaRedirect = sessionStorage.getItem('spa_redirect');
if (spaRedirect) {
  sessionStorage.removeItem('spa_redirect');
  window.history.replaceState(null, '', spaRedirect);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
