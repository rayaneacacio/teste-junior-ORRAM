import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Home from './pages/Home';
import { CurrencyProvider } from './hooks/currency';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <CurrencyProvider>
        <Home />
      </CurrencyProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
