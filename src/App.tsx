import { Homepage } from './pages/Homepage';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Globals from './styles/globals';
import { TransactionsProvider } from './hooks/useTransactions';
import { ModalActiveProvider } from './hooks/useModalActive';
import { ModalTypeProvider } from './hooks/useModalType';
import { TransactionByIdProvider } from './hooks/useTransactionById';

const App = (): JSX.Element => {
  return (
    <ModalActiveProvider>
      <ModalTypeProvider>
        <TransactionsProvider>
          <TransactionByIdProvider>
            <ThemeProvider theme={theme}>
              <Homepage />
              <Globals />
            </ThemeProvider>
          </TransactionByIdProvider>
        </TransactionsProvider>
      </ModalTypeProvider>
    </ModalActiveProvider>
  );
};

export default App;
