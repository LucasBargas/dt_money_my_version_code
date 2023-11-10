import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1296px;
  margin: 0 auto;

  @media (max-width: 1366px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    padding: 0 2.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;
