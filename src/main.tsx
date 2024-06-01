import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { IconContext } from "react-icons";




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconContext.Provider value={{ className: "shared-class", size: "30" }}>
        <App />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
