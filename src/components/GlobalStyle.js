import { createGlobalStyle } from 'styled-components';
import NothingYouCouldDoWoff from '../assets/fonts/nothing-you-could-do.woff';
import NothingYouCouldDoWoff2 from '../assets/fonts/nothing-you-could-do.woff2';
import PiazzollaRegulareot from '../assets/fonts/piazzolla-v8-latin-regular.eot';
import PiazzollaRegularwoff2 from '../assets/fonts/piazzolla-v8-latin-regular.woff2';
import PiazzollaRegularwoff from '../assets/fonts/piazzolla-v8-latin-regular.woff';
import PiazzollaRegularttf from '../assets/fonts/piazzolla-v8-latin-regular.ttf';
import PiazzollaRegularsvg from '../assets/fonts/piazzolla-v8-latin-regular.svg';
import Piazzolla800eot from '../assets/fonts/piazzolla-v8-latin-800.eot';
import Piazzolla800woff2 from '../assets/fonts/piazzolla-v8-latin-800.woff2';
import Piazzolla800woff from '../assets/fonts/piazzolla-v8-latin-800.woff';
import Piazzolla800ttf from '../assets/fonts/piazzolla-v8-latin-800.ttf';
import Piazzolla800svg from '../assets/fonts/piazzolla-v8-latin-800.svg';
import PiazzollaItaliceot from '../assets/fonts/piazzolla-v8-latin-italic.eot';
import PiazzollaItalicwoff2 from '../assets/fonts/piazzolla-v8-latin-italic.woff2';
import PiazzollaItalicwoff from '../assets/fonts/piazzolla-v8-latin-italic.woff';
import PiazzollaItalicttf from '../assets/fonts/piazzolla-v8-latin-italic.ttf';
import PiazzollaItalicsvg from '../assets/fonts/piazzolla-v8-latin-italic.svg';
import Piazzolla800Italiceot from '../assets/fonts/piazzolla-v8-latin-800italic.eot';
import Piazzolla800Italicwoff2 from '../assets/fonts/piazzolla-v8-latin-800italic.woff2';
import Piazzolla800Italicwoff from '../assets/fonts/piazzolla-v8-latin-800italic.woff';
import Piazzolla800Italicttf from '../assets/fonts/piazzolla-v8-latin-800italic.ttf';
import Piazzolla800Italicsvg from '../assets/fonts/piazzolla-v8-latin-800italic.svg';

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

  blockquote {
    margin-left: 0;
    margin-right: 0;
    padding-left: 30px;
    padding-right: 30px;
    border-left: 3px solid ${({ darkMode }) => (darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)')}
  }
  .blog-image {
    width: 100%;
    text-align: center;
    background-color: ${({ darkMode }) => (darkMode ? '#242424' : '#cfcfcf')}
  }

  @font-face {
    font-family: 'Nothing You Could Do';
    src: local('Nothing You Could Do'), local('NothingYouCouldDo'),
    url(${NothingYouCouldDoWoff2}) format('woff2'),
    url(${NothingYouCouldDoWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

/* piazzolla-regular - latin */
@font-face {
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: normal;
  src: url(${PiazzollaRegulareot}); /* IE9 Compat Modes */
  src: local(''),
       url(${PiazzollaRegulareot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${PiazzollaRegularwoff2}) format('woff2'), /* Super Modern Browsers */
       url(${PiazzollaRegularwoff}) format('woff'), /* Modern Browsers */
       url(${PiazzollaRegularttf}) format('truetype'), /* Safari, Android, iOS */
       url(${PiazzollaRegularsvg}) format('svg'); /* Legacy iOS */
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
/* piazzolla-italic - latin */
@font-face {
  font-family: 'Piazzolla';
  font-style: italic;
  src: url(${PiazzollaItaliceot}); /* IE9 Compat Modes */
  src: local(''),
       url(${PiazzollaItaliceot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${PiazzollaItalicwoff2}) format('woff2'), /* Super Modern Browsers */
       url(${PiazzollaItalicwoff}) format('woff'), /* Modern Browsers */
       url(${PiazzollaItalicttf}) format('truetype'), /* Safari, Android, iOS */
       url(${PiazzollaItalicsvg}) format('svg'); /* Legacy iOS */
}

/* piazzolla-800italic - latin */
@font-face {
  font-family: 'Piazzolla';
  font-style: italic;
  font-weight: 800;
  src: url(${Piazzolla800Italiceot}); /* IE9 Compat Modes */
  src: local(''),
       url(${Piazzolla800Italiceot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${Piazzolla800Italicwoff2}) format('woff2'), /* Super Modern Browsers */
       url(${Piazzolla800Italicwoff}) format('woff'), /* Modern Browsers */
       url(${Piazzolla800Italicttf}) format('truetype'), /* Safari, Android, iOS */
       url(${Piazzolla800Italicsvg}) format('svg'); /* Legacy iOS */
}

`;

export default GlobalStyle;
