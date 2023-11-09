import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      fieldColor: string;
      fieldActiveColor: string;
      fontColor: string;
      negativeColor: string;
    };

    fonts: {
      roboto: string;
    };
  }
}
