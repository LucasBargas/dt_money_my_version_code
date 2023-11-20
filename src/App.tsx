import { Homepage } from './pages/Homepage';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Globals from './styles/globals';
import { TaskListProvider } from './hooks/useTransactions';
import { ModalActiveProvider } from './hooks/useModalActive';
import { ModalTypeProvider } from './hooks/useModalType';

const App = (): JSX.Element => {
  return (
    <ModalActiveProvider>
      <ModalTypeProvider>
        <TaskListProvider>
          <ThemeProvider theme={theme}>
            <Homepage />
            <Globals />
          </ThemeProvider>
        </TaskListProvider>
      </ModalTypeProvider>
    </ModalActiveProvider>
  );
};

export default App;
