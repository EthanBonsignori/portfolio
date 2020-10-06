import { createGlobalStyle } from 'styled-components';
import GrenzeGotischWoff from '../assets/fonts/Grenze_Gotisch.woff'
import GrenzeGotischWoff2 from '../assets/fonts/Grenze_Gotisch.woff2'


const GlobalStyle = createGlobalStyle`
  html {
    background: #141414;
  }
  @font-face {
    font-family: 'Grenze Gotisch';
    src: local('Grenze Gotisch'), local('GrenzeGotisch'),
    url(${GrenzeGotischWoff2}) format('woff2'),
    url(${GrenzeGotischWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
`;

export default GlobalStyle;
