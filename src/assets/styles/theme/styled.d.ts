import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      darkenBlue: string;
      blue: string;
      lightenBlue: string;
      yellow: string;
      darkenGray: string;
      gray: string;
      lightenGray: string;
      white: string;
      black: string;
    };
  }
}
