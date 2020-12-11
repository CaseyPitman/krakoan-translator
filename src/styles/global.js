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
      height: 100%;
      width: 100%;
   }

   .header{
      color: red;
   }



`;
