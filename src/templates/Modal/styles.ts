import styled from 'styled-components';

interface ModalProps {
  modalActive: boolean;
}

export const ModalContainer = styled.section<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.modalBackground};
  opacity: ${({ modalActive }) => (modalActive ? '1' : '0')};
  pointer-events: ${({ modalActive }) => (modalActive ? 'all' : 'none')};
  transition: .4s;

  @media (max-width: 1024px) {
    padding: 0 2.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }

  @media (max-width: 375px) {
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0;
  }
`;

export const ModalArea = styled.div<ModalProps>`
  width: 100%;
  max-width: 535px;
  background: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: .375rem;
  transform: ${({ modalActive }) =>
    modalActive ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)'};
  transition: .4s;
`;

export const ModalAreaHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: .375rem .375rem 0 .375rem;

  button {
    background: transparent;
    padding: .875rem;

    &:hover {
      img {
        filter: brightness(.8);
      }
    }

    img {
      transition: .4s;
    }
  }
`;
