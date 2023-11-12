import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      fieldColor: string;
      fieldActiveColor: string;
      buttonRedColor: string;
      fontColor: string;
      negativeColor: string;
      modalBackground: string;
    };

    fonts: {
      roboto: string;
    };
  }
}
