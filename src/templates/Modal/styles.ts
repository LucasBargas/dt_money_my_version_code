import styled from 'styled-components';

export const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.modalBackground};

  @media (max-width: 1024px) {
    padding: 0 2.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

export const ModalArea = styled.div`
  width: 100%;
  max-width: 535px;
  background: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: .375rem;
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
  }
`;
