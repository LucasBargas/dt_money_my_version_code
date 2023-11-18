import React from 'react';
import * as S from './styles';
import { Container } from '../../components/Container';

export const Header = (): JSX.Element => {
  return (
    <S.HeaderContainer>
      <Container>
        <h1>Header</h1>
      </Container>
    </S.HeaderContainer>
  );
};
