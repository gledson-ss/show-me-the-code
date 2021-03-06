import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks/AppProvider';
import Routes from './routes';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <GlobalStyles />
      <Routes />
    </AppProvider>
  </ThemeProvider>
);

export default App;
