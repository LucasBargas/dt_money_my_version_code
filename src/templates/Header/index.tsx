import * as S from './styles';
import { Container } from '../../components/Container';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { useModalActive } from '../../hooks/useModalActive';
import { useModalType } from '../../hooks/useModalType';

export const Header = (): JSX.Element => {
  const { modalActive, setModalActive } = useModalActive();
  const { setModalType } = useModalType();

  const handleClick = (): void => {
    setModalActive(!modalActive);
    setModalType('create');
  };

  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderArea>
          <figure>
            <img src={logo} alt="DT Money - Logo" />
          </figure>

          <Button
            handleClick={handleClick}
            color="fontColor"
            background="greenColor"
            border="greenColor"
            hover="greenColorActive"
            padding="1rem"
            type="button"
          >
            Nova transação
          </Button>
        </S.HeaderArea>
      </Container>
    </S.HeaderContainer>
  );
};
