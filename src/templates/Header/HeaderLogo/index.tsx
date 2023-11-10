import React from 'react';
import logo from '../../../assets/logo.svg';
import * as S from './styles';

export const HeaderLogo = (): JSX.Element => {
  return (
    <S.HeaderLogoContainer>
      <img src={logo} alt="DT Money Logo" />
    </S.HeaderLogoContainer>
  );
};
