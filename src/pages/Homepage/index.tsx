import React from 'react';
import { Header } from '../../templates/Header';
import { TransactionModal } from '../../templates/TransactionModal';
import { Summary } from '../../templates/Summary';
import { TransactionsTable } from '../../templates/TransactionsTable';

export const Homepage = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Summary />
      <TransactionsTable />
      <TransactionModal />
    </React.Fragment>
  );
};
