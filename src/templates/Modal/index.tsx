import React from 'react';
import * as S from './styles';
import closeIcon from '../../assets/close.svg';
import { ModalForm } from './ModalForm';

export const Modal = (): JSX.Element => {
  return (
    <S.ModalContainer>
      <S.ModalArea>
        <S.ModalAreaHeader>
          <button>
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
