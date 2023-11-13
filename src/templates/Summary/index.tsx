import React from 'react';
import * as S from './styles';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions.';

export const Summary = (): JSX.Element => {
  const { transactions } = useTransactions();

  const transformCurrency = (value: number): string => {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const transactionTypeSum = (type: string): number => {
    const transactionsList = transactions
      .filter((el) => {
        return el.transactionType === type && el;
      })
      .map((el) => el.amount)
      .reduce((ac, value) => ac + value, 0);

    return transactionsList;
  };

  return (
    <S.SummaryContainer>
      <S.SummaryArea>
        <S.SummaryCard>
          <header>
            <h3>Entradas</h3>
            <i>
              <img src={incomeIcon} alt="Entradas" />
            </i>
          </header>
          <strong>{transformCurrency(transactionTypeSum('deposit'))}</strong>
        </S.SummaryCard>

        <S.SummaryCard>
          <header>
            <h3>Saídas</h3>
            <i>
              <img src={outcomeIcon} alt="Saídas" />
            </i>
          </header>
          <strong>- {transformCurrency(transactionTypeSum('withdraw'))}</strong>
        </S.SummaryCard>
        <S.SummaryCard>
          <header>
            <h3>Total</h3>
            <i>
              <img src={totalIcon} alt="Entradas" />
            </i>
          </header>
          <strong>
            {transformCurrency(
              transactionTypeSum('deposit') - transactionTypeSum('withdraw'),
            )}
          </strong>
        </S.SummaryCard>
      </S.SummaryArea>
    </S.SummaryContainer>
  );
};
