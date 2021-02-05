import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import GlobalStyle from './GlobalStyle';
import Theme from './Theme';
import Main from './Main';

library.add(
  fab,
  faEnvelope
);

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
