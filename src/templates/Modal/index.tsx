import React from 'react';
import * as S from './styles';
import closeIcon from '../../assets/close.svg';
import { ModalCreateForm } from './ModalForms/ModalCreateForm';
import { ModalEditForm } from './ModalForms/ModalEditForm';
import { useModalActive } from '../../hooks/useModalActive';
import { useModalType } from '../../hooks/useModalType';

export const Modal = (): JSX.Element => {
  const { modalActive, setModalActive } = useModalActive();
  const { modalType, setModalType } = useModalType();

  const handleCloseModal = (): void => {
    setModalActive(false);
    setModalType('create');
  };

  const handleOutsideClick = (e: React.MouseEvent): void => {
    if (modalActive && e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <S.ModalContainer modalActive={modalActive} onClick={handleOutsideClick}>
      <S.ModalArea modalActive={modalActive}>
        <S.ModalAreaHeader>
          <button onClick={handleCloseModal}>
            <figure>
              <img src={closeIcon} alt="Fechar Modal" />
            </figure>
          </button>
        </S.ModalAreaHeader>

        {modalType === 'create' && <ModalCreateForm />}
        {modalType === 'edit' && <ModalEditForm />}
      </S.ModalArea>
    </S.ModalContainer>
  );
};
