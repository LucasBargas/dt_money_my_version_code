import React from 'react';
import * as S from './styles';
import { Container } from '../../components/Container';
import logo from '../../assets/logo.svg';

export const Header = (): JSX.Element => {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderArea>
          <figure>
            <img src={logo} alt="DT Money - Logo" />
          </figure>

          <button>Nova transação</button>
        </S.HeaderArea>
      </Container>
    </S.HeaderContainer>
  );
};
