/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { useTransactions } from './useTransactions';
import { type ITransactions } from '../interfaces/ITransactions';

interface Props {
  children: JSX.Element;
}

interface ITransactionByIdContextData {
  transactionById: string;
  setTransactionById: React.Dispatch<React.SetStateAction<string>>;
  transaction: ITransactions | undefined;
}

const TransactionByIdContext = React.createContext<ITransactionByIdContextData>(
  {} as ITransactionByIdContextData,
);

export const TransactionByIdProvider = ({ children }: Props): JSX.Element => {
  const [transactionById, setTransactionById] = React.useState<string>('');
  const { transactions } = useTransactions();

  const transaction = transactions.find((el) => el.id === transactionById);

  return (
    <TransactionByIdContext.Provider
      value={{ transactionById, setTransactionById, transaction }}
    >
      {children}
    </TransactionByIdContext.Provider>
  );
};

export const useTransactionById = (): ITransactionByIdContextData => {
  const { transactionById, setTransactionById, transaction } = React.useContext(
    TransactionByIdContext,
  );

  return {
    transactionById,
    setTransactionById,
    transaction,
  };
};
