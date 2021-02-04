import { createGlobalStyle } from 'styled-components';
import GrenzeGotischWoff from '../assets/fonts/Grenze_Gotisch.woff';
import GrenzeGotischWoff2 from '../assets/fonts/Grenze_Gotisch.woff2';
import PiazollaWoff from '../assets/fonts/Piazolla.woff';
import PiazollaWoff2 from '../assets/fonts/Piazolla.woff2';

const GlobalStyle = createGlobalStyle`
  
  body {
    font-family: 'Piazolla';
    background: #141414;
    color: #fff;
    margin: 0;
  }
  button {
    color: #fff;
  }
  @font-face {
    font-family: 'Grenze Gotisch';
    src: local('Grenze Gotisch'), local('GrenzeGotisch'),
    url(${GrenzeGotischWoff2}) format('woff2'),
    url(${GrenzeGotischWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Piazolla';
    src: local('Piazolla'),
    url(${PiazollaWoff2}) format('woff2'),
    url(${PiazollaWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
`;

export default GlobalStyle;
