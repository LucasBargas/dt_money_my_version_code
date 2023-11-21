import React from 'react';
import * as S from './styles';
import { Container } from '../../components/Container';

export const Footer = (): JSX.Element => {
  return (
    <S.FooterContainer>
      <Container>
        <React.Fragment>
          <p>
            Este projeto foi desenvolvido com <span>♥</span> por{' '}
            <a
              href="https://projetoslucasbargas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucas Bargas
            </a>
            base em um layout que localizado numa aula na{' '}
            <a
              href="https://www.rocketseat.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RocketSeat
            </a>
            . Decidi refaze-lo completamente do zero, com minha própria lógica e
            aplicando algumas novas funcionalidades.
          </p>

          <a
            href="https://github.com/LucasBargas/dt_money_my_version_code"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para visualizar o repositório no GitHub
          </a>
        </React.Fragment>
      </Container>
    </S.FooterContainer>
  );
};
