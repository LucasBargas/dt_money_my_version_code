import React from 'react';
import * as S from './styles';
import { Container } from '../../components/Container';
import { TransactionsListTable } from './TransactionsListTable';

export const TransactionsList = (): JSX.Element => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <S.TransactionsListContainer>
      <Container>
        <React.Fragment>
          <S.TransactionsListSearch
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="search"
              placeholder="Busque uma transação por Descrição ou Categoria"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              value={inputValue}
            />
          </S.TransactionsListSearch>

          <TransactionsListTable inputValue={inputValue} />
        </React.Fragment>
      </Container>
    </S.TransactionsListContainer>
  );
};
