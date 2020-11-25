import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1025px",
  desktop: "1441px"
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

const GlobalStyles = createGlobalStyle`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 50%;

    @media ${device.mobile} {
      font-size: 62.5%;
    }
  }
  
 body {
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    min-height: 100%;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    outline: none;
    color: ${colors.black};
    background: ${colors.white};
    overflow-x: hidden;
    min-height: 100vh;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none !important;
    transform: color .5s;
  }
`;

export default GlobalStyles;
