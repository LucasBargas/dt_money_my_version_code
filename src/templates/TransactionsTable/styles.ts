import styled from 'styled-components';

export const TransactionsTableContainer = styled.section`
  padding: 3.9375rem 0;
`;

export const TransactionsTableArea = styled.div`
  display: grid;
  gap: 1.25rem;

  form {
    position: relative;
    max-width: 1120px;

    input {
      padding: 1.25rem 4rem 1.25rem 1rem;
    }

    i {
      color: ${({ theme }) => theme.colors.fontColor};
      position: absolute;
      top: 50%;
      right: 1.25rem;
      font-size: 1.75rem;
      transform: translate3d(0, -50%, 0);
    }
  }
`;
