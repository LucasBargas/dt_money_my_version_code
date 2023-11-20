/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';

interface Props {
  children: JSX.Element;
}

interface IModalTypeContextData {
  modalType: 'create' | 'edit';
  setModalType: React.Dispatch<React.SetStateAction<'create' | 'edit'>>;
}

const ModalTypeContext = React.createContext<IModalTypeContextData>(
  {} as IModalTypeContextData,
);

export const ModalTypeProvider = ({ children }: Props): JSX.Element => {
  const [modalType, setModalType] = React.useState<'create' | 'edit'>('create');

  return (
    <ModalTypeContext.Provider value={{ modalType, setModalType }}>
      {children}
    </ModalTypeContext.Provider>
  );
};

export const useModalType = (): IModalTypeContextData => {
  const { modalType, setModalType } = React.useContext(ModalTypeContext);

  return {
    modalType,
    setModalType,
  };
};
