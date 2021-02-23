import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Theme from './Theme';
import Main from './Main';
import useLocalStorage from '../hooks/useLocalStoage';

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage(true);

  const handleToggleTheme = evt => {
    setDarkMode(evt?.target?.checked);
  };

  return (
    <Theme darkMode={darkMode}>
      <GlobalStyle />
      <Router>
        <Main darkMode={darkMode} toggleTheme={handleToggleTheme}/>
      </Router>
    </Theme>
  );
};

export default App;
