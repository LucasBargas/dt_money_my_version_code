import React from 'react';
import { Header } from '../../templates/Header';

interface Props {
  handleToggleTheme: () => void;
  isDarkTheme: boolean;
}

export const Homepage = (props: Props): JSX.Element => {
  return (
    <React.Fragment>
      <Header
        handleToggleTheme={props.handleToggleTheme}
        isDarkTheme={props.isDarkTheme}
      />
      <p>Homepage</p>
    </React.Fragment>
  );
};
