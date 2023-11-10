import React from 'react';
import { Homepage } from './pages/Homepage';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Globals from './styles/globals';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
      <Globals />
    </ThemeProvider>
  );
};

export default App;
