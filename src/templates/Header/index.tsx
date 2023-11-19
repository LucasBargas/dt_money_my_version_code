import * as S from './styles';
import { Container } from '../../components/Container';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';

export const Header = (): JSX.Element => {
  const handleClick = (): void => {
    console.log('Olá');
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
