import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.secondaryColor};
  padding-bottom: 7.75rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  button {
    &:first-of-type {
      background: ${({ theme }) => theme.colors.fieldActiveColor};
      color: #ffffff;
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

export const ToggleButton = styled.button<{ isDarkTheme: boolean }>`
  width: 70px;
  height: 34px;
  border-radius: 34px;
  background: red;
  position: relative;
  background: ${({ theme }) => theme.colors.primaryColor};

  &&:after {
    content: '';
    height: 26px;
    width: 26px;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
    background: ${({ theme }) => theme.colors.secondaryColor};
    transform: ${({ isDarkTheme }) =>
      isDarkTheme ? 'translateX(36px)' : 'translateX(0px)'};
    transition: .4s;
  }
`;
