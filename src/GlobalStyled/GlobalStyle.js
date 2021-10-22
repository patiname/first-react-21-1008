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

export const Icons = {
  random: <i class="fas fa-random"></i>,
  preArrow: <i class="fas fa-angle-double-left"></i>,
  play: <i class="fas fa-play"></i>,
  nextArrow: <i class="fas fa-angle-double-right"></i>,
  shear: <i class="fas fa-retweet"></i>,
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
