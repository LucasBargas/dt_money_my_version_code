import * as S from './styles';
import { Container } from '../../components/Container';
import { HeaderLogo } from './HeaderLogo';

interface Props {
  handleToggleTheme: () => void;
  isDarkTheme: boolean;
}

export const Header = (props: Props): JSX.Element => {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderWrapper>
          <HeaderLogo />

          <S.HeaderButtons>
            <button>Nova Transação</button>

            <S.ToggleButton
              onClick={props.handleToggleTheme}
              isDarkTheme={props.isDarkTheme}
            ></S.ToggleButton>
          </S.HeaderButtons>
        </S.HeaderWrapper>
      </Container>
    </S.HeaderContainer>
  );
};
