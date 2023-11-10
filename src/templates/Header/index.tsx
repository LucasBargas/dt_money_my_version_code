import * as S from './styles';
import { Container } from '../../components/Container';
import { HeaderLogo } from './HeaderLogo';

interface Props {
  handleModalToggle: () => void;
}

export const Header = (props: Props): JSX.Element => {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderWrapper>
          <HeaderLogo />

          <S.HeaderButtons>
            <button onClick={props.handleModalToggle}>Nova Transação</button>
          </S.HeaderButtons>
        </S.HeaderWrapper>
      </Container>
    </S.HeaderContainer>
  );
};
