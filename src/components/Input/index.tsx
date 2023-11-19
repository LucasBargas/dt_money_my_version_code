import React from 'react';
import * as S from './styles';

interface Props {
  id: string;
  focus?: boolean;
  placeholder: string;
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

export const Input = (props: Props): JSX.Element => {
  return (
    <S.InputContainer id={props.id} focus={props.focus}>
      <input
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        onChange={props.handleChange}
        value={props.value}
      />
    </S.InputContainer>
  );
};
