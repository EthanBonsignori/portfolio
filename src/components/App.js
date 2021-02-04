import React from 'react';
import GlobalStyle from './GlobalStyle';
import Theme from './Theme';
import Main from './Main';

const App = () => (
  <>
    <GlobalStyle />
    <Theme>
      <Main />
    </Theme>
  </>
);

export default App;
