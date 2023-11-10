import React from 'react';
import { Header } from '../../templates/Header';
import { Modal } from '../../templates/Modal';

export const Homepage = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState<boolean>(true);

  const handleModalToggle = (): void => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      <Header handleModalToggle={handleModalToggle} />
      <Modal showModal={showModal} handleModalToggle={handleModalToggle} />
      <p>sds</p>
    </React.Fragment>
  );
};
