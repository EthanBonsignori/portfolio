import { createGlobalStyle } from 'styled-components';
import NothingYouCouldDoWoff from '../assets/fonts/nothing-you-could-do.woff';
import NothingYouCouldDoWoff2 from '../assets/fonts/nothing-you-could-do.woff2';
import Piazzolla600eot from '../assets/fonts/piazzolla-v8-latin-600.eot';
import Piazzolla600woff2 from '../assets/fonts/piazzolla-v8-latin-600.woff2';
import Piazzolla600woff from '../assets/fonts/piazzolla-v8-latin-600.woff';
import Piazzolla600ttf from '../assets/fonts/piazzolla-v8-latin-600.ttf';
import Piazzolla600svg from '../assets/fonts/piazzolla-v8-latin-600.svg';
import Piazzolla800eot from '../assets/fonts/piazzolla-v8-latin-800.eot';
import Piazzolla800woff2 from '../assets/fonts/piazzolla-v8-latin-800.woff2';
import Piazzolla800woff from '../assets/fonts/piazzolla-v8-latin-800.woff';
import Piazzolla800ttf from '../assets/fonts/piazzolla-v8-latin-800.ttf';
import Piazzolla800svg from '../assets/fonts/piazzolla-v8-latin-800.svg';
import Piazzolla600Italiceot from '../assets/fonts/piazzolla-v8-latin-600italic.eot';
import Piazzolla600Italicwoff2 from '../assets/fonts/piazzolla-v8-latin-600italic.woff2';
import Piazzolla600Italicwoff from '../assets/fonts/piazzolla-v8-latin-600italic.woff';
import Piazzolla600Italicttf from '../assets/fonts/piazzolla-v8-latin-600italic.ttf';
import Piazzolla600Italicsvg from '../assets/fonts/piazzolla-v8-latin-600italic.svg';

const GlobalStyle = createGlobalStyle`
  html, * {
    transition: background-color 500ms ease-in-out;
  }
  body {
    font-family: 'Piazzolla';
    background: ${({ theme }) => theme.color.background};
    margin: 0;
  }
  div, a, p, input, textarea, button, 
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.color.text};
    font-family: 'Piazzolla';
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Nothing You Could Do';
    src: local('Nothing You Could Do'), local('NothingYouCouldDo'),
    url(${NothingYouCouldDoWoff2}) format('woff2'),
    url(${NothingYouCouldDoWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

/* piazzolla-600 - latin */
@font-face {
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 600;
  src: url(${Piazzolla600eot}); /* IE9 Compat Modes */
  src: local(''),
       url(${Piazzolla600eot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${Piazzolla600woff2}) format('woff2'), /* Super Modern Browsers */
       url(${Piazzolla600woff}) format('woff'), /* Modern Browsers */
       url(${Piazzolla600ttf}) format('truetype'), /* Safari, Android, iOS */
       url(${Piazzolla600svg}) format('svg'); /* Legacy iOS */
}
/* piazzolla-800 - latin */
@font-face {
  font-family: 'Piazzolla';
  font-style: bold;
  font-weight: 800;
  src: url(${Piazzolla800eot}); /* IE9 Compat Modes */
  src: local(''),
       url(${Piazzolla800eot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${Piazzolla800woff2}) format('woff2'), /* Super Modern Browsers */
       url(${Piazzolla800woff}) format('woff'), /* Modern Browsers */
       url(${Piazzolla800ttf}) format('truetype'), /* Safari, Android, iOS */
       url(${Piazzolla800svg}) format('svg'); /* Legacy iOS */
}
/* piazzolla-600italic - latin */
@font-face {
  font-family: 'Piazzolla';
  font-style: italic;
  font-weight: 600;
  src: url(${Piazzolla600Italiceot}); /* IE9 Compat Modes */
  src: local(''),
       url(${Piazzolla600Italiceot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${Piazzolla600Italicwoff2}) format('woff2'), /* Super Modern Browsers */
       url(${Piazzolla600Italicwoff}) format('woff'), /* Modern Browsers */
       url(${Piazzolla600Italicttf}) format('truetype'), /* Safari, Android, iOS */
       url(${Piazzolla600Italicsvg}) format('svg'); /* Legacy iOS */
}

`;

export default GlobalStyle;
