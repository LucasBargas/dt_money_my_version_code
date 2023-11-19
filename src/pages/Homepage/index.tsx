import React from 'react';
import { Header } from '../../templates/Header';
import { Modal } from '../../templates/Modal';

export const Homepage = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Modal />
    </React.Fragment>
  );
};
