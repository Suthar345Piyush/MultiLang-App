import  React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18next.js";


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback="loading....">
    <App />
    </React.Suspense>
  </React.StrictMode>,
)
