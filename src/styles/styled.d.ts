import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
        colors: {
            primaryOne: string,
            primaryTwo: string,
            white: string,
            error: string,
        }

        input: {
            background: string,
            border: string
        }

        button: {
            background: string,
            textColor: string
        }

    }
}