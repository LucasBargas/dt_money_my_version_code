import styled from 'styled-components';

export const ModalContainer = styled.section<{ showModal: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.modalBackground};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh + 2rem);
  padding: 2rem;
  opacity: ${({ showModal }) => (!showModal ? '0' : '1')};
  pointer-events: ${({ showModal }) => (!showModal ? 'none' : 'all')};
  transition: .2s;
`;

export const ModalArea = styled.div<{ showModal: boolean }>`
  background: ${({ theme }) => theme.colors.primaryColor};
  width: 100%;
  max-width: 520px;
  border-radius: 6px;
  transform: ${({ showModal }) =>
    showModal ? 'translate3d(0, 0, 0)' : 'translate3d(0, -40px, 0)'};
  transition: .2s;
`;

export const ModalButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: .25rem;

  button {
    font-size: 1.625rem;
    padding: 0.5rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.fontColor};
    transition: .4s;

    &:hover {
      filter: brightness(.6);
    }
  }
`;

export const ModalAreaForm = styled.div`
  padding: 1rem 3rem 3rem 3rem;
`;
