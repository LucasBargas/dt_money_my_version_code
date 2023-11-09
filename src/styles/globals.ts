import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: ${({ theme }) => theme.fonts.roboto};
    letter-spacing: 1px;

    button, input {
      outline: none;
      border: none;
      font-family: ${({ theme }) => theme.fonts.roboto};
      letter-spacing: 1px;
    }

    button {
      cursor: pointer;
      font-weight: 500;
    }

    ul, li {
      list-style: none;
    }

    svg, span {
      display: block;
    }

    a {
      text-decoration: none;
    }
  }
`;

export default Globals;
