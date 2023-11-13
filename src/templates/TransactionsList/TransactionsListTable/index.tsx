import React from 'react';
import * as S from './styles';
import { useTransactions } from '../../../hooks/useTransactions.';

interface Props {
  inputValue: string;
}

export const TransactionsListTable = ({ inputValue }: Props): JSX.Element => {
  const { transactions } = useTransactions();

  const transactionsFiltered = transactions.filter((el) => {
    return inputValue?.length > 0 && inputValue?.trim()
      ? el.category.toLowerCase().includes(inputValue.toLowerCase()) ||
          el.description.toLowerCase().includes(inputValue.toLowerCase())
      : el;
  });

  return (
    <S.TransactionsListTableContainer>
      {transactionsFiltered.length === 0 && (
        <p>Nenhuma transação cadastrada.</p>
      )}
      {transactionsFiltered.length > 0 &&
        transactionsFiltered.map((transaction) => (
          <li key={transaction.id}>{transaction.description}</li>
        ))}
    </S.TransactionsListTableContainer>
  );
};
