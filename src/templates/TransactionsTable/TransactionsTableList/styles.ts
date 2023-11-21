import styled from 'styled-components';

export const TransactionsTableListContainer = styled.div`
  padding-top: 1.25rem;
`;

export const TransactionsTableListHeader = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 0 1.25rem 1.5rem 1.25rem;

    li {
      font-weight: 500;
    }
  }
`;

export const TransactionsTableListArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const TransactionSingle = styled.div<{
  amountColor: 'negativeColor' | 'greenColor';
}>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  background: ${({ theme }) => theme.colors.primaryColor};
  padding: 1.25rem 2rem;
  border-radius: 6px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 2rem;
  }

 p {
  &:nth-of-type(1) {
    @media (max-width: 768px) {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      font-size: 1.25rem;
    }
  }

  &:nth-of-type(2) {
    color: ${({ theme, amountColor }) => theme.colors[amountColor]};

    @media (max-width: 768px) {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
      font-size: 1.625rem;
      font-weight: 600;
    }
  }

  &:nth-of-type(3) {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 16px;
      height: 16px;
    }

    @media (max-width: 768px) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      font-size: 1.25rem;
      padding-top: .5rem;
    }
  }

  &:nth-of-type(4) {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 16px;
      height: 16px;
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      font-size: 1.25rem;
      padding-top: .5rem;
    }
  }
 }
`;

export const TransactionsTableListActions = styled.td`
  display: flex;
  flex-direction: row !important;
  gap: .375rem;

  @media (max-width: 768px) {
    justify-content: space-between;
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }

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

      @media (max-width: 768px) {
        font-size: 1.75rem;
      }
    }
  }
`;
