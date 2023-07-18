import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    &::selection {
      background-color: ${({ theme }) => theme.colors.primary[300]};
      color: ${({ theme }) => theme.colors.background[100]};
    }
  }

  body {
    min-height: 100vh;
    max-height: 100vh;
    height: 100vh;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text[100]};
    background-color: ${({ theme }) => theme.colors.background[100]};
    font-family: 'Rubik', sans-serif;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .container {
    margin: 0 auto;
    max-width: 1440px;
  }

  button {
    font: inherit;
    color: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  input {
    color: inherit;
    font: inherit;
    border: none;
    background: transparent;
  }

  svg {
    max-width: 100%;
    max-height: 100%;
  }

  .portal {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  h1 {
    font-size: 24px;
    line-height: 28px;
  }
`;
