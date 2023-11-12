import styled from 'styled-components';

export const ModalFormContainer = styled.div`
  padding: 0 3rem 3rem 3rem;

  @media (max-width: 414px) {
    padding: 0 2rem 5rem 2rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  form {
    display: flex;
    flex-direction: column;
    padding-top: 1.25rem;
    gap: 1.25rem;

    div {
      width: 100%;

      input {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        background: ${({ theme }) => theme.colors.secondaryColor};
        color: ${({ theme }) => theme.colors.fontColor};
        border: 2px solid transparent;
        border-radius: 4px;
        transition: .4s;

        &:focus {
          border-color: ${({ theme }) => theme.colors.fieldActiveColor};
        }
      }

      p {
        margin-top: .25rem;
        font-size: .875rem;
        color: tomato;
      }
    }

    button {
      font-size: 1rem;
      padding: .75rem;
      border-radius: 4px;

      &[type="submit"] {
        margin-top: 1rem;
        background: ${({ theme }) => theme.colors.fieldActiveColor};
        color: ${({ theme }) => theme.colors.fontColor};
        transition: .5s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;

export const ModalFormTransactionsButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface IButton {
  isActive: boolean;
  isColor: 'fieldActiveColor' | 'buttonRedColor';
}

export const TransactionsButtonType = styled.button<IButton>`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .25rem;
    background: ${({ theme, isActive, isColor }) =>
      isActive ? theme.colors[isColor] : theme.colors.fieldColor};
    color: ${({ theme }) => theme.colors.fontColor};
    transition: .5s;

    &:hover {
      background: ${({ theme, isColor }) => theme.colors[isColor]} !important;
    }

    img {
      height: 1.5rem;
      width: 1.5rem;
    }
`;
