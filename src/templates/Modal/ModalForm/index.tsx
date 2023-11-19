/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import * as S from './styles';
import { Input } from '../../../components/Input';
import { type ITransactions } from '../../../interfaces/ITransactions';
import { v4 as uuidv4 } from 'uuid';

export const ModalForm = (): JSX.Element => {
  const [transactionBody, setTransactionBody] = React.useState(
    {} as ITransactions,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTransactionBody({ ...transactionBody, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(transactionBody);
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
          value={transactionBody.description}
        />
        <Input
          focus
          id="test"
          placeholder="Preço"
          name="amount"
          type="text"
          handleChange={handleChange}
          value={transactionBody.amount}
        />
        <Input
          focus
          id="test"
          placeholder="Categoria"
          name="category"
          type="text"
          handleChange={handleChange}
          value={transactionBody.category}
        />

        <button type="submit">Enviar</button>
      </form>
    </S.ModalFormArea>
  );
};
