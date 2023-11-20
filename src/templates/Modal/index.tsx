import React from 'react';
import * as S from './styles';
import closeIcon from '../../assets/close.svg';
import { ModalForm } from './ModalForm';
import { useModalActive } from '../../hooks/useModalActive';

export const Modal = (): JSX.Element => {
  const { modalActive, setModalActive } = useModalActive();

  const handleOutsideClick = (e: React.MouseEvent): void => {
    if (modalActive && e.target === e.currentTarget) {
      setModalActive(false);
    }
  };

  return (
    <S.ModalContainer modalActive={modalActive} onClick={handleOutsideClick}>
      <S.ModalArea modalActive={modalActive}>
        <S.ModalAreaHeader>
          <button
            onClick={() => {
              setModalActive(!modalActive);
            }}
          >
            <figure>
              <img src={closeIcon} alt="Fechar Modal" />
            </figure>
          </button>
        </S.ModalAreaHeader>

        <ModalForm />
      </S.ModalArea>
    </S.ModalContainer>
  );
};
