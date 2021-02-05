import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Theme from './Theme';
import Main from './Main';

const App = () => (
  <>
    <GlobalStyle />
    <Theme>
      <Router>
        <Main />
      </Router>
    </Theme>
  </>
);

export default App;
