import React from 'react';
import { Homepage } from './pages/Homepage';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/Themes/darkTheme';
import Globals from './styles/globals';
import { lightTheme } from './styles/Themes/lightTheme';
import { useLocalStorage } from 'usehooks-ts';

const App = (): JSX.Element => {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);

  const handleToggleTheme = (): void => {
    setDarkTheme((prevValue: boolean) => !prevValue);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Homepage
        handleToggleTheme={handleToggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <Globals />
    </ThemeProvider>
  );
};

export default App;
