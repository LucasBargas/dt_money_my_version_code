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
import { useModalActive } from '../../../hooks/useModalActive';

export const ModalCreateForm = (): JSX.Element => {
  const [transactionType, setTransactionType] = React.useState('deposit');
  const { transactions, setTransactions } = useTransactions();
  const [data, setData] = React.useState({} as ITransactions);
  const { modalActive, setModalActive } = useModalActive();
  const [descriptionError, setDescriptionError] =
    React.useState<boolean>(false);
  const [amountError, setAmountError] = React.useState<boolean>(false);
  const [categoryError, setCategoryError] = React.useState<boolean>(false);
  const [regex] = React.useState(/^[0-9]+$/);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ ...data, [e.target.name]: e.target.value });

    if (e.target.name === 'description') {
      setDescriptionError(false);
    }

    if (e.target.name === 'amount') {
      setAmountError(false);
    }

    if (e.target.name === 'category') {
      setCategoryError(false);
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'description' && e.target.value.length === 0) {
      setDescriptionError(true);
    }

    if (e.target.name === 'amount' && !regex.test(e.target.value)) {
      setAmountError(true);
    }

    if (e.target.name === 'category' && e.target.value.length === 0) {
      setCategoryError(true);
    }
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

    if (!description) {
      setDescriptionError(true);
      return;
    } else {
      setDescriptionError(false);
    }

    if (!amount || !regex.test(amount as string)) {
      setAmountError(true);
      return;
    } else {
      setAmountError(false);
    }

    if (!category) {
      setCategoryError(true);
      return;
    } else {
      setCategoryError(false);
    }

    setTransactions([transaction, ...transactions]);
    setModalActive(!modalActive);
    setData({} as ITransactions);
  };

  return (
    <S.TransactionModalFormsArea>
      <h2>Nova transação</h2>

      <form onSubmit={handleSubmit}>
        <Input
          focus
          id="test"
          placeholder="Descrição"
          name="description"
          type="text"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={data.description || ''}
          error={descriptionError && 'É preciso colocar uma descrição.'}
        />

        <Input
          focus
          id="test"
          placeholder="Preço"
          name="amount"
          type="text"
          value={data.amount || ''}
          handleBlur={handleBlur}
          handleChange={handleChange}
          error={amountError && 'É preciso colocar um preço válido.'}
        />

        <Input
          focus
          id="test"
          placeholder="Categoria"
          name="category"
          type="text"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={data.category || ''}
          error={categoryError && 'É preciso colocar uma categoria.'}
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
            Cadastrar
          </Button>
        </S.FormButtons>
      </form>
    </S.TransactionModalFormsArea>
  );
};
