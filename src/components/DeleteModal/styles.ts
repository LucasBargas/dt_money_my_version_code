import styled from 'styled-components';

export const DeleteModalContainer = styled.section<{
  deleteModalActive: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.modalBackground};
  opacity: ${({ deleteModalActive }) => (deleteModalActive ? '1' : '0')};
  pointer-events: ${({ deleteModalActive }) =>
    deleteModalActive ? 'all' : 'none'};
  transition: .3s;

  @media (max-width: 1024px) {
    padding: 0 2.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

export const DeleteModalArea = styled.div<{ deleteModalActive: boolean }>`
  width: 100%;
  max-width: 535px;
  background: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: .375rem;
  transform: ${({ deleteModalActive }) =>
    deleteModalActive ? 'translate3d(0, 0, 0)' : 'translate3d(0, 40px, 0)'};
  transition: .3s;
`;

export const DeleteModalAreaHeader = styled.div`
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

export const DeleteModalAreaContent = styled.div`
  padding: .5rem 3rem 2rem 3rem;

  @media (max-width: 390px) {
    padding: 0 1.5rem 2.5rem 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const DeleteModalAreaActions = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.25rem;
  gap: 1rem;
`;
