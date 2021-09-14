import { createGlobalStyle } from "styled-components";
import bgImg from '../../images/bg.jpeg'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    color: #332c36;
    font-family: 'New Tegomin', serif;
  }

  body {
    background: url(${bgImg}) center no-repeat;
    background-size: cover;
  }

`;