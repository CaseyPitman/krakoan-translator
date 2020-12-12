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

   .app {
      margin: auto;
      max-width: 1400px;
   }

   //Header

   .header{
      height:200px;
      border: 1px solid;
      margin-top: 5px;
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
