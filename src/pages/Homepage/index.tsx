import React from 'react';
import { Header } from '../../templates/Header';
import { Modal } from '../../templates/Modal';
import { Summary } from '../../templates/Summary';

export const Homepage = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Summary />
      <Modal />
    </React.Fragment>
  );
};
