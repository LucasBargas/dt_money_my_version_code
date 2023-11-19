/* eslint-disable @typescript-eslint/indent */
import styled, { css } from 'styled-components';

interface ButtonProperties {
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
  hover:
    | 'primaryColor'
    | 'greenColorActive'
    | 'buttonRedColorActive'
    | 'fieldColor';
  padding: string;
  icon?: boolean;
}

export const ButtonElement = styled.button<ButtonProperties>`
  display: block;
  font-weight: 700;
  background: ${({ theme, background }) => theme.colors[background]};
  color: ${({ theme, color }) => theme.colors[color]};
  border: 1px solid ${({ theme, border }) => theme.colors[border]};
  padding: ${({ padding }) => padding};
  border-radius: .325rem;
  transition: .4s;

  ${({ icon }) =>
    icon &&
    css`
    display: flex;
    align-items: center;
  `}

  &:hover {
    background: ${({ theme, hover }) => theme.colors[hover]};
    border-color: ${({ theme, hover }) => theme.colors[hover]};
  }
`;
