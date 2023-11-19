/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import * as S from './styles';

interface Props {
  handleClick?: () => void;
  color:
    | 'greenColor'
    | 'greenColorActive'
    | 'buttonRedColor'
    | 'fontColor'
    | 'fieldColor';
  background:
    | 'greenColor'
    | 'greenColorActive'
    | 'buttonRedColor'
    | 'fontColor'
    | 'fieldColor';
  border:
    | 'greenColor'
    | 'greenColorActive'
    | 'buttonRedColor'
    | 'fontColor'
    | 'fieldColor';
  icon?: boolean;
  padding: string;
  type: 'button' | 'submit';
  children: string | JSX.Element | JSX.Element[];
}

export const Button = (props: Props): JSX.Element => {
  return (
    <S.ButtonElement
      onClick={props.handleClick}
      color={props.color}
      background={props.background}
      border={props.border}
      icon={props.icon}
      padding={props.padding}
      type={props.type}
    >
      {props.children}
    </S.ButtonElement>
  );
};
