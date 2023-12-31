import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0 2.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;
