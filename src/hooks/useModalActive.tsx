/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';

interface Props {
  children: JSX.Element;
}

interface IModalActiveContextData {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalActiveContext = React.createContext<IModalActiveContextData>(
  {} as IModalActiveContextData,
);

export const ModalActiveProvider = ({ children }: Props): JSX.Element => {
  const [modalActive, setModalActive] = React.useState<boolean>(false);

  return (
    <ModalActiveContext.Provider value={{ modalActive, setModalActive }}>
      {children}
    </ModalActiveContext.Provider>
  );
};

export const useModalActive = (): IModalActiveContextData => {
  const { modalActive, setModalActive } = React.useContext(ModalActiveContext);

  return {
    modalActive,
    setModalActive,
  };
};
