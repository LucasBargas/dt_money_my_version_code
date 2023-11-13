import React from 'react';
import { Header } from '../../templates/Header';
import { Modal } from '../../templates/Modal';
import { Summary } from '../../templates/Summary';
import { TransactionsList } from '../../templates/TransactionsList';

export const Homepage = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleModalToggle = (): void => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      <Header handleModalToggle={handleModalToggle} />
      <Modal showModal={showModal} handleModalToggle={handleModalToggle} />
      <Summary />
      <TransactionsList />
    </React.Fragment>
  );
};
