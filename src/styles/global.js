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
      border-color: ${({ theme }) => theme.border};
      font-family: 'Helvetica', sans-serif;
      transition: all 0.25s linear;
      height: 100%;
      width: 100%;
   }

   .app {
      margin: auto;
      max-width: 1400px;
   }

   .info-tag {
      font-family: 'Roboto Mono', monospace;
      font-weight: 300;
      font-size: 14px;
   }

   //Header

   .header{
      height:200px;
      width: 100%;
      margin-top: 10px;
      position: relative;
   }

   .header::before {
      content: '';
      border-bottom: 2px solid;
      border-left: 2px solid;
      width:20px;
      height:20px; 
      position:absolute;
      bottom: 0px;
    }
    
    .header:after {
      content: '';
      border-bottom:2px solid ;
      border-right: 2px solid ;
      width:20px;
      height:20px;
      position: absolute;
      bottom:0px;
      right: 0px;
    }

    //Header-top allows for top partial borders.

    .header-top{
      position:relative;
      height: 0px;
    }

    .header-top::before {
      content: '';
      border-top: 2px solid ;
      border-left: 2px solid;
      width:20px;
      height:20px; 
      position:absolute;
      top: 0px;
    }
    
    .header-top:after {
      content: '';
      border-top:2px solid ;
      border-right: 2px solid ;
      width:20px;
      height:20px;
      position: absolute;
      top:0px;
      right: 0px;
    }

    .header-content {
   
      height:100%;
      postion: relative;
      width: 100%;

    }

    .headline {
       position: absolute;
       bottom: 0px;
       left: 10px;
       font-size: 80px;
       font-weight: 700;
       line-height: 1;
       width: 70%;
    }

    .header-info {
       position: absolute;
       bottom: 10px;
       right: 10px;
       text-align: right;
       width: 20%;
    }

   .icon {
      font-size:20px;
      margin-right: 5px;
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
