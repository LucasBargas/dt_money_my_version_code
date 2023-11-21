import React from 'react';
import { Header } from '../../templates/Header';
import { TransactionModal } from '../../components/TransactionModal';
import { Summary } from '../../templates/Summary';
import { TransactionsTable } from '../../templates/TransactionsTable';
import { Footer } from '../../templates/Footer';

export const Homepage = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Summary />
      <TransactionsTable />
      <TransactionModal />
      <Footer />
    </React.Fragment>
  );
};
