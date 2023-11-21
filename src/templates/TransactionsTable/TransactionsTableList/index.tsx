/* eslint-disable prettier/prettier */
import React from 'react';
import * as S from './styles';
import { useTransactions } from '../../../hooks/useTransactions';
import { useModalActive } from '../../../hooks/useModalActive';
import { useModalType } from '../../../hooks/useModalType';
import { useTransactionById } from '../../../hooks/useTransactionById';
import { MdEdit, MdDelete } from 'react-icons/md';
import { DeleteModal } from '../../../components/DeleteModal';

interface Props {
  inputValue: string;
}

export const TransactionsTableList = ({ inputValue }: Props): JSX.Element => {
  const { transactions } = useTransactions();
  const { modalActive, setModalActive } = useModalActive();
  const { setModalType } = useModalType();
  const { setTransactionById } = useTransactionById();
  const [deleteModalActive, setDeleteModalActive] =
    React.useState<boolean>(false);

  const handleEditClick = (id: string): void => {
    setModalActive(!modalActive);
    setModalType('edit');
    setTransactionById(id);
  };

  const handleDeleteClick = (id: string): void => {
    setDeleteModalActive(!deleteModalActive);
    setTransactionById(id);
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
                <S.TransactionsTableListActions>
                  <button
                    onClick={() => {
                      handleDeleteClick(transaction.id);
                    }}
                    title="Deletar transação"
                  >
                    <i>
                      <MdDelete />
                    </i>
                  </button>
                  <button
                    onClick={() => {
                      handleEditClick(transaction.id);
                    }}
                    title="Editar transação"
                  >
                    <i>
                      <MdEdit />
                    </i>
                  </button>
                </S.TransactionsTableListActions>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {transactions.length === 0 && <p>Nenhuma transação registrada.</p>}

      {transactions.length > 0 && transactionsFiltered.length === 0 && (
        <p>Nenhuma transação registrada com: "{inputValue}".</p>
      )}

      <DeleteModal
        deleteModalActive={deleteModalActive}
        setDeleteModalActive={setDeleteModalActive}
      />
    </S.TransactionsTableListContainer>
  );
};
