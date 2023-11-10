import React from 'react';
import * as S from './styles';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  handleModalToggle: () => void;
}

interface Inputs {
  description: string;
  amount: string;
  category: string;
}

export const ModalForm = ({ handleModalToggle }: Props): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({
    amount,
    category,
    description,
  }): void => {
    const values = { id: uuidv4(), amount, category, description };

    console.log(values);

    reset({
      description: '',
      amount: '',
      category: '',
    });

    handleModalToggle();
  };

  return (
    <S.ModalFormContainer>
      <h2>Nova Transação</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="description">
          <input
            type="text"
            placeholder="Descrição"
            {...register('description', { required: true })}
          />
          {errors.description && <p>É preciso fornecer uma descrição.</p>}
        </div>

        <div id="amount">
          <input
            type="text"
            placeholder="Valor"
            {...register('amount', {
              pattern: /^\d+/,
              required: true,
            })}
          />
          {errors.amount && <p>Insira um valor válido.</p>}
        </div>

        <div id="category">
          <input
            type="text"
            placeholder="Categoria"
            {...register('category', { required: true })}
          />
          {errors.category && <p>É preciso fornecer uma categoria.</p>}
        </div>

        <button type="button">Entrada</button>
        <button type="button">Saída</button>
        <button type="submit">Enviar</button>
      </form>
    </S.ModalFormContainer>
  );
};
