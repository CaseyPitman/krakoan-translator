//Global styling

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   //Full page
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

   //Header

   .header{
      color: red;
   }

   .icon {
      font-size:16px;
   }
   
   .icon:hover {
      cursor: pointer;
   }

   .fa-sun {
      color: white;
   }

   .fa-moon {
      color: black;
   }

`;
