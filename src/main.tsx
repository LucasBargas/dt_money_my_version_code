import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/Themes/darkTheme.ts';
import Globals from './styles/globals.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
      <Globals />
    </ThemeProvider>
  </React.StrictMode>,
);
