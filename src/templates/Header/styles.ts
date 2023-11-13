import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.secondaryColor};
  padding-bottom: 7.75rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  button {
    &:first-of-type {
      background: ${({ theme }) => theme.colors.fieldActiveColor};
      color: ${({ theme }) => theme.colors.fontColor};
      font-weight: 500;
      padding: .75rem;
      border-radius: .325rem;
      transition: .4s;

      &:hover {
        filter: brightness(.9)
      }
    }
  }
`;
