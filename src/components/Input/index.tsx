import React from 'react';
import * as S from './styles';

interface Props {
  id: string;
  focus?: boolean;
  placeholder: string;
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  error?: boolean | string;
}

export const Input = (props: Props): JSX.Element => {
  return (
    <S.InputContainer id={props.id} focus={props.focus}>
      <input
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.value}
      />
      {props.error && <p>{props.error}</p>}
    </S.InputContainer>
  );
};
