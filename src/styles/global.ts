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
    max-height: 100vh;
    height: 100vh;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Rubik', sans-serif;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .container {
    margin: 0 auto;
    max-width: 1440px;
  }
`;
