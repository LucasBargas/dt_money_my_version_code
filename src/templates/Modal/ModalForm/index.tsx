import React from 'react';
import * as S from './styles';
import incomeIcon from '../../../assets/income.svg';
import outcomeIcon from '../../../assets/outcome.svg';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useTransactions } from '../../../hooks/useTransactions.';
import { type ITransactions } from '../../../interfaces/iTransactions';

interface Props {
  handleModalToggle: () => void;
}

interface Inputs {
  description: string;
  amount: string;
  category: string;
}

export const ModalForm = ({ handleModalToggle }: Props): JSX.Element => {
  const { transactions, setTransactions } = useTransactions();
  const [transactionType, setTransactionType] =
    React.useState<string>('deposit');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({
    amount,
    category,
    description,
  }): void => {
    const transactionDesc: ITransactions = {
      id: uuidv4(),
      amount: Number(amount),
      category,
      description,
      transactionType,
      createdAt: new Date(),
    };

    setTransactions([transactionDesc, ...transactions]);

    reset({
      description: '',
      amount: '',
      category: '',
    });

    handleModalToggle();
  };

  return (
    <S.ModalFormContainer>
      <h2>Nova Transação</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="description">
          <input
            type="text"
            placeholder="Descrição"
            {...register('description', { required: true })}
          />
          {errors.description && <p>É preciso fornecer uma descrição.</p>}
        </div>

        <div id="amount">
          <input
            type="text"
            placeholder="Valor"
            {...register('amount', {
              pattern: /^\d+/,
              required: true,
            })}
          />
          {errors.amount && <p>Insira um valor válido.</p>}
        </div>

        <div id="category">
          <input
            type="text"
            placeholder="Categoria"
            {...register('category', { required: true })}
          />
          {errors.category && <p>É preciso fornecer uma categoria.</p>}
        </div>

        <S.ModalFormTransactionsButtons>
          <S.TransactionsButtonType
            type="button"
            isActive={transactionType === 'deposit'}
            isColor="fieldActiveColor"
            onClick={() => {
              setTransactionType('deposit');
            }}
          >
            <img src={incomeIcon} alt="" /> Entrada
          </S.TransactionsButtonType>

          <S.TransactionsButtonType
            type="button"
            isActive={transactionType === 'withdraw'}
            isColor="buttonRedColor"
            onClick={() => {
              setTransactionType('withdraw');
            }}
          >
            <img src={outcomeIcon} alt="" /> Saída
          </S.TransactionsButtonType>
        </S.ModalFormTransactionsButtons>

        <button type="submit">Cadastrar</button>
      </form>
    </S.ModalFormContainer>
  );
};
