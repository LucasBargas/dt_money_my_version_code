/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import * as S from './styles';
import income from '../../../assets/income.svg';
import outcome from '../../../assets/outcome.svg';
import { Input } from '../../../components/Input';
import { type ITransactions } from '../../../interfaces/ITransactions';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../../components/Button';
import { useTransactions } from '../../../hooks/useTransactions';

export const ModalEditForm = (): JSX.Element => {
  const [transactionType, setTransactionType] = React.useState('deposit');
  const { transactions, setTransactions } = useTransactions();
  const [data, setData] = React.useState({} as ITransactions);
  // const [data, setData] = React.useState(transactions[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const { description, amount, category } = data;

    const transaction: ITransactions = {
      id: uuidv4(),
      description,
      amount: Number(amount),
      category,
      transactionType,
      createdAt: new Date().toLocaleString('pt-BR').slice(0, 10),
    };

    setTransactions([transaction, ...transactions]);
  };

  return (
    <S.ModalEditFormArea>
      <h2>Editar transação</h2>

      <form onSubmit={handleSubmit}>
        <Input
          focus
          id="test"
          placeholder="Descrição"
          name="description"
          type="text"
          handleChange={handleChange}
          value={data.description}
          // value={(props.type === 'edit' && data?.description) || ''}
        />

        <Input
          focus
          id="test"
          placeholder="Preço"
          name="amount"
          type="text"
          value={data.amount}
          handleChange={handleChange}
          // value={(props.type === 'edit' && data?.amount) || ''}
        />

        <Input
          focus
          id="test"
          placeholder="Categoria"
          name="category"
          type="text"
          handleChange={handleChange}
          value={data.category}
          // value={(props.type === 'edit' && data?.category) || ''}
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
    </S.ModalEditFormArea>
  );
};
