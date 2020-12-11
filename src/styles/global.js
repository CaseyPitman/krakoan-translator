//Global styling

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   *,
   *::after,
   *::before {
      box-sizing: border-box;
      margin: 0px;
      padding:0px;
   }

   body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      transition: all 0.25s linear;
      height: 100%;
      width: 100%;
   }

   .header{
      color: red;
   }



`;
