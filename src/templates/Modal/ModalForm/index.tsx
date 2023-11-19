/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import * as S from './styles';
import { Input } from '../../../components/Input';
import { type ITransactions } from '../../../interfaces/ITransactions';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../../components/Button';

export const ModalForm = (): JSX.Element => {
  const [data, setData] = React.useState({} as ITransactions);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const { description, amount, category } = data;

    const transaction: ITransactions = {
      id: uuidv4(),
      description,
      amount,
      category,
      transactionType: 'deposit',
      createdAt: new Date().toLocaleString('pt-BR').slice(0, 10),
    };

    console.log(transaction);
  };

  return (
    <S.ModalFormArea>
      <h2>Nova transação</h2>

      <form onSubmit={handleSubmit}>
        <Input
          focus
          id="test"
          placeholder="Descrição"
          name="description"
          type="text"
          handleChange={handleChange}
          value={data.description}
        />

        <Input
          focus
          id="test"
          placeholder="Preço"
          name="amount"
          type="text"
          handleChange={handleChange}
          value={data.amount}
        />

        <Input
          focus
          id="test"
          placeholder="Categoria"
          name="category"
          type="text"
          handleChange={handleChange}
          value={data.category}
        />

        <S.FormButtons>
          <Button
            color="fontColor"
            background="fieldColor"
            border="fieldColor"
            hover="primaryColor"
            padding="1rem"
            type="button"
          >
            Entrada
          </Button>

          <Button
            color="fontColor"
            background="fieldColor"
            border="fieldColor"
            hover="primaryColor"
            padding="1rem"
            type="button"
          >
            Saída
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
    </S.ModalFormArea>
  );
};
