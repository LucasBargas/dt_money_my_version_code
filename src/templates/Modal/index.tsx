import * as S from './styles';

interface Props {
  showModal: boolean;
  handleModalToggle: () => void;
}

export const Modal = (props: Props): JSX.Element => {
  return <S.ModalContainer showModal={props.showModal}>Modal</S.ModalContainer>;
};
