import React from 'react';
import * as S from './styles';
import { FaXmark } from 'react-icons/fa6';
import { ModalForm } from './ModalForm';

interface Props {
  showModal: boolean;
  handleModalToggle: () => void;
}

export const Modal = (props: Props): JSX.Element => {
  const handleOutsideClick = (e: React.MouseEvent): void => {
    if (e.target === e.currentTarget) {
      props.handleModalToggle();
    }
  };

  return (
    <S.ModalContainer onClick={handleOutsideClick} showModal={props.showModal}>
      <S.ModalArea showModal={props.showModal}>
        <S.ModalButton>
          <button onClick={props.handleModalToggle}>
            <FaXmark />
          </button>
        </S.ModalButton>

        <ModalForm handleModalToggle={props.handleModalToggle} />
      </S.ModalArea>
    </S.ModalContainer>
  );
};
