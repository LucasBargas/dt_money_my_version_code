/* eslint-disable prettier/prettier */
import React from 'react';
import * as S from './styles';
import { useTransactions } from '../../../hooks/useTransactions';
import { useModalActive } from '../../../hooks/useModalActive';
import { useModalType } from '../../../hooks/useModalType';
import { useTransactionById } from '../../../hooks/useTransactionById';
import { MdEdit, MdDelete } from 'react-icons/md';
import { DeleteModal } from '../../../components/DeleteModal';
import saleIcon from '../../../assets/sale.svg';
import calendarIcon from '../../../assets/calendar.svg';

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
      {transactions.length > 0 && transactionsFiltered.length > 0 && (
        <S.TransactionsTableListHeader>
          <ul>
            <li>Descrição</li>
            <li>Valor</li>
            <li>Categoria</li>
            <li>Data</li>
            <li>Ações</li>
          </ul>
        </S.TransactionsTableListHeader>
      )}

      <S.TransactionsTableListArea>
        {transactionsFiltered?.length > 0 &&
          transactionsFiltered.map((transaction) => (
            <S.TransactionSingle
              key={transaction.id}
              amountColor={
                transaction.transactionType === 'withdraw'
                  ? 'negativeColor'
                  : 'greenColor'
              }
            >
              <p>{transaction.description}</p>

              <p>
                {transaction.transactionType === 'withdraw' ? '- ' : ''}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount as number)}
              </p>

              <p>
                <figure>
                  <img src={saleIcon} alt="" />
                </figure>{' '}
                {transaction.category}
              </p>

              <p>
                <figure>
                  <img src={calendarIcon} alt="" />
                </figure>{' '}
                {transaction.createdAt}
              </p>

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
            </S.TransactionSingle>
          ))}
      </S.TransactionsTableListArea>

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
