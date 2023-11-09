import React from 'react';
import { Homepage } from './pages/Homepage';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/Themes/darkTheme';
import Globals from './styles/globals';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Homepage />
      <Globals />
    </ThemeProvider>
  );
};

export default App;
