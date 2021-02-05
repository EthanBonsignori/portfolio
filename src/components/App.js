import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import GlobalStyle from './GlobalStyle';
import Theme from './Theme';
import Main from './Main';

library.add(
  fab,
  faEnvelope,
  faLightbulb
);

const App = () => {
  const [darkmode, setDarkmode] = useState(true);

  const handleToggleTheme = evt => {
    setDarkmode(evt?.target?.checked);
  };

  return (
    <Theme darkmode={darkmode}>
      <GlobalStyle />
      <Router>
        <Main darkmode={darkmode} toggleTheme={handleToggleTheme}/>
      </Router>
    </Theme>
  );
};

export default App;
