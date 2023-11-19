import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{ focus?: boolean }>`
  input {
    width: 100%;
    height: 3.375rem;
    font-size: 1rem;
    font-weight: 500;
    color: #7C7C8A;
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
`;