import React from 'react';

interface Props {
  handleToggleTheme: () => void;
  isDarkTheme: boolean;
}

export const Header = (props: Props): JSX.Element => {
  return (
    <header>
      <button onClick={props.handleToggleTheme}>
        {`The current theme is ${props.isDarkTheme ? 'dark' : 'light'}`}
      </button>
    </header>
  );
};
