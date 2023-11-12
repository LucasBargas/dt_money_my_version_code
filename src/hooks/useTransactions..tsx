/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { type ITransactions } from '../interfaces/iTransactions';

interface Props {
  children: JSX.Element;
}

interface ITransactionsContextData {
  transactions: ITransactions[];
  setTransactions: React.Dispatch<React.SetStateAction<ITransactions[]>>;
}

const TransactionsContext = React.createContext<ITransactionsContextData>(
  {} as ITransactionsContextData,
);

export const TaskListProvider = ({ children }: Props): JSX.Element => {
  const [transactions, setTransactions] = React.useState<ITransactions[]>([]);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = (): ITransactionsContextData => {
  const { transactions, setTransactions } =
    React.useContext(TransactionsContext);

  React.useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  React.useEffect(() => {
    if (
      localStorage.getItem('transactions') &&
      localStorage.getItem('transactions')!.length > 0
    ) {
      setTransactions(JSON.parse(localStorage.getItem('transactions')!));
    }
  }, [setTransactions]);

  return {
    transactions,
    setTransactions,
  };
};
