import React from 'react';
import { Homepage } from './pages/Homepage';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Globals from './styles/globals';
import { TaskListProvider } from './hooks/useTransactions.';

const App = (): JSX.Element => {
  return (
    <TaskListProvider>
      <ThemeProvider theme={theme}>
        <Homepage />
        <Globals />
      </ThemeProvider>
    </TaskListProvider>
  );
};

export default App;
