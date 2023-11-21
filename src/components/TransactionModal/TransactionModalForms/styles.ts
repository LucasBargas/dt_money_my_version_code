import styled from 'styled-components';

export const TransactionModalFormsArea = styled.div`
  padding: 0 3rem 3rem 3rem;

  @media (max-width: 390px) {
    padding: 0 1.5rem 2.5rem 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  form {
    padding-top: 2.5rem;
    display: grid;
    gap: 1rem;
  }
`;

export const FormButtons = styled.div`
  padding-top: .5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  button {
    width: 100%;
    &[type= 'button']:first-of-type {
      grid-column: 1 / 2;
    }

    &[type= 'button']:last-of-type {
      grid-column: 2 / 2;
    }

    &[type= 'submit'] {
      margin-top: 1.5rem;
      grid-column: 1 / 3;
    }
  }
`;
