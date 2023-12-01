import React from 'react';
import * as S from './styles';
import { Container } from '../../components/Container';
import { Input } from '../../components/Input';
import { TransactionsTableList } from './TransactionsTableList';
import { IoSearchSharp } from 'react-icons/io5';

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
              placeholder="Pesquise por descrição ou categoria"
              name="description"
              type="text"
              handleChange={handleChange}
              value={inputValue}
            />
            <i>
              <IoSearchSharp />
            </i>
          </form>

          <TransactionsTableList inputValue={inputValue} />
        </S.TransactionsTableArea>
      </Container>
    </S.TransactionsTableContainer>
  );
};
