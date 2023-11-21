import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  a, span {
    display: inline-block;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.greenColor};
  }

  a {
    &:hover {
      text-decoration: underline;
    }

    &:last-of-type {
      margin-top: .625rem;
    }
  }

`;
