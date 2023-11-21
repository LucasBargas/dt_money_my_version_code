import React from 'react';
import * as S from './styles';
import closeIcon from '../../assets/close.svg';
import { ModalCreateForm } from './TransactionModalForms/TransactionModalCreateForm';
import { ModalEditForm } from './TransactionModalForms/TransactionModalEditForm';
import { useModalActive } from '../../hooks/useModalActive';
import { useModalType } from '../../hooks/useModalType';

export const TransactionModal = (): JSX.Element => {
  const { modalActive, setModalActive } = useModalActive();
  const { modalType, setModalType } = useModalType();

  const handleCloseModal = (): void => {
    setModalActive(false);
    setTimeout(() => {
      setModalType('create');
    }, 400);
  };

  const handleOutsideClick = (e: React.MouseEvent): void => {
    if (modalActive && e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <S.TransactionModalContainer
      modalActive={modalActive}
      onClick={handleOutsideClick}
    >
      <S.TransactionModalArea modalActive={modalActive}>
        <S.TransactionModalAreaHeader>
          <button onClick={handleCloseModal}>
            <figure>
              <img src={closeIcon} alt="Fechar Modal" />
            </figure>
          </button>
        </S.TransactionModalAreaHeader>

        {modalType === 'create' && <ModalCreateForm />}
        {modalType === 'edit' && <ModalEditForm />}
      </S.TransactionModalArea>
    </S.TransactionModalContainer>
  );
};
