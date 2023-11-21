import styled from 'styled-components';

export const TransactionsTableListContainer = styled.div`
  table {
    width: 100%;
    border-spacing: 0 .5rem;

    th {
      text-align: left;
      color: ${({ theme }) => theme.colors.fontColor};
      font-weight: 400;
      padding: 1.25rem 2rem;
    }

    td {
      padding: 1.25rem 2rem;
      background: ${({ theme }) => theme.colors.primaryColor};

      &.withdraw {
        color: ${({ theme }) => theme.colors.negativeColor};
      }

      &.deposit {
        color: ${({ theme }) => theme.colors.greenColor};
      }
    }
  }
`;

export const TransactionsTableListActions = styled.td`
  display: flex;
  gap: .375rem;

  button {
    background: transparent;
    padding: .25rem;

    &:hover {
      svg {
        filter: brightness(.8);
      }
    }

    &:first-of-type {
      svg {
        color: ${({ theme }) => theme.colors.negativeColor};
      }
    }

    &:last-of-type {
      svg {
        color: ${({ theme }) => theme.colors.greenColor};
      }
    }

    svg {
      font-size: 1.25rem;
      transition: .4s;
    }
  }
`;
