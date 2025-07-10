import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import './index.css'
import App from './App.jsx'
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from 'next-themes';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
  <Theme>
    <BrowserRouter> 
        <App />

    </BrowserRouter>
  </Theme>
  </ThemeProvider>

  </StrictMode>,
)
