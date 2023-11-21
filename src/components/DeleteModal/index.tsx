import React from 'react';
import * as S from './styles';
import closeIcon from '../../assets/close.svg';
import { Button } from '../Button';
import { useTransactionById } from '../../hooks/useTransactionById';
import { useTransactions } from '../../hooks/useTransactions';

interface Props {
  deleteModalActive: boolean;
  setDeleteModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteModal = (props: Props): JSX.Element => {
  const { transactions, setTransactions } = useTransactions();
  const { transaction } = useTransactionById();

  const handleCloseDeleteModal = (): void => {
    props.setDeleteModalActive(!props.deleteModalActive);
  };

  const handleConfirmClick = (): void => {
    const transactionsCopy = transactions.filter(
      (el) => el.id !== transaction?.id,
    );

    setTransactions(transactionsCopy);

    if (transactionsCopy.length === 0) {
      localStorage.removeItem('transactions');
    }

    handleCloseDeleteModal();
  };

  return (
    <S.DeleteModalContainer deleteModalActive={props.deleteModalActive}>
      <S.DeleteModalArea deleteModalActive={props.deleteModalActive}>
        <S.DeleteModalAreaHeader>
          <button onClick={handleCloseDeleteModal}>
            <figure>
              <img src={closeIcon} alt="Fechar Modal" />
            </figure>
          </button>
        </S.DeleteModalAreaHeader>

        <S.DeleteModalAreaContent>
          <h2>Tem certeza que deseja deletar esta transação?</h2>

          <S.DeleteModalAreaActions>
            <Button
              color="fontColor"
              background="greenColor"
              border="greenColor"
              hover="greenColorActive"
              padding="1rem"
              type="button"
              handleClick={handleConfirmClick}
            >
              Confirmar
            </Button>
            <Button
              color="fontColor"
              background="fieldColor"
              border="fieldColor"
              hover="primaryColor"
              padding="1rem"
              type="button"
              handleClick={handleCloseDeleteModal}
            >
              Cancelar
            </Button>
          </S.DeleteModalAreaActions>
        </S.DeleteModalAreaContent>
      </S.DeleteModalArea>
    </S.DeleteModalContainer>
  );
};
