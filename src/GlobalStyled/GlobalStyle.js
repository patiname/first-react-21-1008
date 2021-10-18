import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const MainColor = {
  fontColor: "gold",
  subColor: "blue",
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
