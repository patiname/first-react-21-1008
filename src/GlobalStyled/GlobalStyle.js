import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const dark = false;

export const MainColor = {
  fontColor: "gold",
  subColor: "blue",
};

export const DarkMode = {
  bgColor: dark ? "#333" : "white",
  fontColor: dark ? "white" : "#333",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
    }

`;
