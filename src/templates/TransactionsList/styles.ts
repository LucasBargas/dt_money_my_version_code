import styled from 'styled-components';

export const TransactionsListContainer = styled.section`
  padding-top: 3rem;
`;

export const TransactionsListSearch = styled.form`
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
`;
