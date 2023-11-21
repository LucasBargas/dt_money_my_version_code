import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{ focus?: boolean }>`
  input {
    width: 100%;
    max-width: 1120px;
    height: 3.375rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.fontColor};
    background: ${({ theme }) => theme.colors.primaryColor};
    border: 2px solid transparent;
    border-radius: .375rem;
    padding: 1.25rem 1rem;
    transition: .4s;

    ${({ focus }) =>
      focus &&
      css`
    &:focus {
      border-color: ${({ theme }) => theme.colors.fontColor};
    }
    `}
  }

  p {
    font-size: .9325rem;
    color: tomato;
    margin-top: .5rem;
  }
`;
