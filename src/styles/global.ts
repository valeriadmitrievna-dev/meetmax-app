import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    min-height: 100vh;
    font-size: 14px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.dark_00};
    background-color: ${({ theme }) => theme.colors.light_00};
  }
`;
