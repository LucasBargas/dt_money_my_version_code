import styled from 'styled-components';

export const ModalContainer = styled.section<{ showModal: boolean }>`
  background: ${({ theme }) => theme.colors.modalBackground};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh + 2rem);
  opacity: ${({ showModal }) => (!showModal ? '0' : '1')};
  pointer-events: ${({ showModal }) => (!showModal ? 'none' : 'all')};
  transition: .2s;
`;
