import styled from 'styled-components';

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: -4.75rem auto 0 auto;

  @media (max-width: 1024px) {
    padding: 0 2.75rem;
  }

  @media (max-width: 608px) {
    overflow-x: auto;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

export const SummaryArea = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SummaryCard = styled.div`
  padding: 2rem;
  border-radius: 0.375rem;
  width: calc(100% / 3);

  @media (max-width: 608px) {
    flex-shrink: 0;
    width: 65%;
  }

  @media (max-width: 480px) {
    flex-shrink: 0;
    width: 70%;
  }

  &:not(:last-of-type) {
    background: ${({ theme }) => theme.colors.fieldColor};
  }

  &:last-of-type {
    background: ${({ theme }) => theme.colors.greenColorActive};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    h3 {
      font-weight: 500;
      font-size: 1rem;
      color: #c4c4c4;
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  strong {
    font-size: 2rem;
  }
`;
