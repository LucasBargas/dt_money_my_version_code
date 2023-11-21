import * as S from './styles';

interface Props {
  children: JSX.Element;
}

export const Container = ({ children }: Props): JSX.Element => {
  return <S.ContainerWrapper>{children}</S.ContainerWrapper>;
};
