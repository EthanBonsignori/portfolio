import { createGlobalStyle } from 'styled-components';
import lightFabric from '../assets/images/light-fabric.png';
import darkFabric from '../assets/images/dark-fabric.png';
import {
  NothingYouCouldDoWoff,
  NothingYouCouldDoWoff2,
  PiazzollaRegulareot,
  PiazzollaRegularwoff2,
  PiazzollaRegularwoff,
  PiazzollaRegularttf,
  PiazzollaRegularsvg,
  Piazzolla800eot,
  Piazzolla800woff2,
  Piazzolla800woff,
  Piazzolla800ttf,
  Piazzolla800svg,
  PiazzollaItaliceot,
  PiazzollaItalicwoff2,
  PiazzollaItalicwoff,
  PiazzollaItalicttf,
  PiazzollaItalicsvg,
  Piazzolla800Italiceot,
  Piazzolla800Italicwoff2,
  Piazzolla800Italicwoff,
  Piazzolla800Italicttf,
  Piazzolla800Italicsvg,
} from '../assets/fonts';

const GlobalStyle = createGlobalStyle`
  html, * {
    transition: background-image 500ms ease-in-out;
  }
  body {
    font-family: 'Piazzolla';
    background-image: url(${({ darkMode }) => (darkMode ? darkFabric : lightFabric)});
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

  code {
    margin: 0 4px;
    color: ${({ theme }) => theme.color.accent};
    background-color: ${({ darkMode }) => (darkMode ? 'rgba(255, 255, 255, .06)' : 'rgba(23, 42, 58, .06)')};
  }

  .blog-image {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: ${({ darkMode }) => (darkMode ? '#242424' : '#cfcfcf')};
  }

  .blog-screenshot {
    width: 100%;
    text-align: center;
    -webkit-box-shadow: 5px 5px 16px -4px #000000; 
    box-shadow: 5px 5px 16px -4px #000000;
  }

  .blog-info {
    width: 100%;
    background-color: ${({ darkMode }) => (darkMode ? 'rgba(0, 0, 0, 0.2);' : 'rgba(245, 245, 245, 0.5)')};
    

    padding: 16px 24px;
    border-radius: 3px;
    border-left: 4px solid ${({ theme }) => theme.color.accent};
  }

  pre {
    margin-top: -15px;
  }

  .github-link {
    margin-bottom: 0 !important;
    opacity: 0.5;
    display: flex;
    align-items: center;

    &:hover {
      opacity: 0.7;
    }

    span {
      margin-bottom: 3px;
      
    }
  }

  .github-logo {
    content:url(${({ darkMode }) => (darkMode ? 'https://i.imgur.com/XeN2w2v.png' : 'https://i.imgur.com/FkW1LP0.png')});

    width: 16px;
    height: auto;
    margin-right: 4px;
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
