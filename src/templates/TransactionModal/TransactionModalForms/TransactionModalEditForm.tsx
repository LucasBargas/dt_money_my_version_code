/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import * as S from './styles';
import income from '../../../assets/income.svg';
import outcome from '../../../assets/outcome.svg';
import { Input } from '../../../components/Input';
import { type ITransactions } from '../../../interfaces/ITransactions';
import { Button } from '../../../components/Button';
import { useTransactions } from '../../../hooks/useTransactions';
import { useTransactionById } from '../../../hooks/useTransactionById';
import { useModalActive } from '../../../hooks/useModalActive';
import { useModalType } from '../../../hooks/useModalType';

export const ModalEditForm = (): JSX.Element => {
  const { transactions, setTransactions } = useTransactions();
  const { transaction } = useTransactionById();
  const [data, setData] = React.useState<ITransactions>(transaction!);
  const { modalActive, setModalActive } = useModalActive();
  const { setModalType } = useModalType();
  const [transactionType, setTransactionType] = React.useState(
    transaction!.transactionType,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const { description, amount, category } = data;
    const transactionsCopy = transactions.map((el) => el);

    transactionsCopy.forEach((el) => {
      if (el.id === transaction?.id) {
        el.description = description;
        el.amount = Number(amount);
        el.category = category;
        el.transactionType = transactionType;
        el.createdAt = new Date().toLocaleString('pt-BR').slice(0, 10);
      }
    });

    setTransactions(transactionsCopy);
    setModalActive(!modalActive);
    setTimeout(() => {
      setModalType('create');
    }, 400);
  };

  return (
    <S.TransactionModalFormsArea>
      <h2>Editar transação</h2>

      <form onSubmit={handleSubmit}>
        <Input
          focus
          id="test"
          placeholder="Descrição"
          name="description"
          type="text"
          handleChange={handleChange}
          value={data?.description || ''}
        />

        <Input
          focus
          id="test"
          placeholder="Preço"
          name="amount"
          type="text"
          value={data?.amount || ''}
          handleChange={handleChange}
        />

        <Input
          focus
          id="test"
          placeholder="Categoria"
          name="category"
          type="text"
          handleChange={handleChange}
          value={data?.category || ''}
        />

        <S.FormButtons>
          <Button
            icon
            color="fontColor"
            background={
              transactionType === 'deposit' ? 'greenColor' : 'fieldColor'
            }
            border={transactionType === 'deposit' ? 'greenColor' : 'fieldColor'}
            hover={
              transactionType === 'deposit' ? 'greenColorActive' : 'fieldColor'
            }
            padding="1rem"
            type="button"
            handleClick={() => {
              setTransactionType('deposit');
            }}
          >
            <figure>
              <img src={income} alt="" />
            </figure>
            <span>Entrada</span>
          </Button>

          <Button
            icon
            color="fontColor"
            background={
              transactionType === 'withdraw' ? 'buttonRedColor' : 'fieldColor'
            }
            border={
              transactionType === 'withdraw' ? 'buttonRedColor' : 'fieldColor'
            }
            hover={
              transactionType === 'withdraw'
                ? 'buttonRedColorActive'
                : 'fieldColor'
            }
            padding="1rem"
            type="button"
            handleClick={() => {
              setTransactionType('withdraw');
            }}
          >
            <figure>
              <img src={outcome} alt="" />
            </figure>
            <span>Saída</span>
          </Button>

          <Button
            color="fontColor"
            background="greenColor"
            border="greenColor"
            hover="greenColorActive"
            padding="1rem"
            type="submit"
          >
            Editar
          </Button>
        </S.FormButtons>
      </form>
    </S.TransactionModalFormsArea>
  );
};
