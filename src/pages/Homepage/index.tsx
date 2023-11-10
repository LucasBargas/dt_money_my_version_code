import React from 'react';
import { Header } from '../../templates/Header';
import { Modal } from '../../templates/Modal';

interface Props {
  handleToggleTheme: () => void;
  isDarkTheme: boolean;
}

export const Homepage = (props: Props): JSX.Element => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleModalToggle = (): void => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      <Header
        handleToggleTheme={props.handleToggleTheme}
        isDarkTheme={props.isDarkTheme}
        handleModalToggle={handleModalToggle}
      />
      <Modal showModal={showModal} handleModalToggle={handleModalToggle} />
      <p>sds</p>
    </React.Fragment>
  );
};
