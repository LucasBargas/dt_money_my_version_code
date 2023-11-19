import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      fieldColor: string;
      summaryCard: string;
      greenColor: string;
      greenColorActive: string;
      buttonRedColor: string;
      buttonRedColorActive: string;
      fontColor: string;
      negativeColor: string;
      modalBackground: string;
    };

    fonts: {
      roboto: string;
    };
  }
}
