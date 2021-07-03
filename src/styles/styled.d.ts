import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
        colors: {
            primaryOne: '#292929',
            primaryTwo: '#FFCE00',
            white: '#FFFFFF',
            error: '#EB2D2D',
        }
    }
}