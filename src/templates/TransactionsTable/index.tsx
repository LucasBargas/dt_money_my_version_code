import React from 'react';
import * as S from './styles';
import { Container } from '../../components/Container';
import { Input } from '../../components/Input';
import { TransactionsTableList } from './TransactionsTableList';

export const TransactionsTable = (): JSX.Element => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <S.TransactionsTableContainer>
      <Container>
        <S.TransactionsTableArea>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              focus
              id="test"
              placeholder="Descrição"
              name="description"
              type="text"
              handleChange={handleChange}
              value={inputValue}
            />
          </form>

          <TransactionsTableList inputValue={inputValue} />
        </S.TransactionsTableArea>
      </Container>
    </S.TransactionsTableContainer>
  );
};
