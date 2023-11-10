import styled from 'styled-components';

export const ModalFormContainer = styled.div`
  padding: 0 3rem 3rem 3rem;

  form {
    display: grid;
    grid-column: repeat(3, 1fr);
    padding-top: 1rem;
    gap: 1rem;

    div {
      width: 100%;

      input {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        background: ${({ theme }) => theme.colors.secondaryColor};
      }

      p {
        font-size: .875rem;
        color: tomato;
      }
    }

    #description {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }

    #amount {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }

    #category {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }

    button[type="button"]:nth-of-type(1){
      background: red;
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }

    button[type="button"]:nth-of-type(2) {
      background: orange;
      grid-column: 2 / 3;
      grid-row: 4 / 5;
    }

    button[type="submit"] {
      grid-column: 1 / 3;
      grid-row: 5 / 6;
      margin-top: .5rem;
    }
  }
`;
