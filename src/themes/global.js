//Global styling for theme dependent elements

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

   body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      border-color: ${({ theme }) => theme.border};
   }
`;
