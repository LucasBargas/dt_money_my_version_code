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
    height: calc(100vh + 2rem);
    background: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: ${({ theme }) => theme.fonts.roboto};
    letter-spacing: 1px;

    button, input {
      display: block;
      outline: none;
      border: none;
      font-family: ${({ theme }) => theme.fonts.roboto};
      letter-spacing: 1px;
      font-size: 1rem;

      @media (max-width: 375px) {
        font-size: .875rem;
      }
    }

    button {
      cursor: pointer;
      font-weight: 500;
    }

    ul, li {
      list-style: none;
    }

    svg, span, img {
      display: block;
    }

    img {
      width: 100%;
    }

    a {
      text-decoration: none;
    }
  }
`;

export default Globals;
