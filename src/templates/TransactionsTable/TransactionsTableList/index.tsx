import React from 'react';
import * as S from './styles';
import { useTransactions } from '../../../hooks/useTransactions';
import { useModalActive } from '../../../hooks/useModalActive';
import { useModalType } from '../../../hooks/useModalType';

interface Props {
  inputValue: string;
}

export const TransactionsTableList = ({ inputValue }: Props): JSX.Element => {
  const { transactions, setTransactions } = useTransactions();
  const { modalActive, setModalActive } = useModalActive();
  const { setModalType } = useModalType();

  const handleEditClick = (id: string): void => {
    setModalActive(!modalActive);
    setModalType('edit');
    console.log(id);
  };

  const handleDeleteClick = (id: string): void => {
    const transactionsCopy = transactions.filter((el) => el.id !== id);
    setTransactions(transactionsCopy);

    if (transactionsCopy.length === 0) {
      localStorage.removeItem('transactions');
    }
  };

  const transactionsFiltered = inputValue.trim()
    ? transactions.filter((transaction) => {
      return (
        transaction.category
          .toLowerCase()
          .includes(inputValue.toLowerCase()) ||
          transaction.description
            .toLowerCase()
            .includes(inputValue.toLowerCase())
      );
    })
    : transactions;

  return (
    <S.TransactionsTableListContainer>
      {transactionsFiltered && transactionsFiltered.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {transactionsFiltered.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td className={transaction.transactionType}>
                  {transaction.transactionType === 'withdraw' ? '- ' : ''}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDeleteClick(transaction.id);
                    }}
                  >
                    Apagar
                  </button>
                  <button
                    onClick={() => {
                      handleEditClick(transaction.id);
                    }}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {transactions.length === 0 && <p>Nenhuma transação registrada.</p>}

      {transactions.length > 0 && transactionsFiltered.length === 0 && (
        <p>Nenhuma transação registrada com: "{inputValue}".</p>
      )}
    </S.TransactionsTableListContainer>
  );
};
