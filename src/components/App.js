import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import GlobalStyle from './GlobalStyle';
import Main from './Main';
import Theme from './Theme';

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);

  const handleToggleTheme = evt => {
    setDarkMode(evt?.target?.checked);
  };

  return (
    <Theme darkMode={darkMode}>
      <GlobalStyle darkMode={darkMode} />
      <Router>
        <Main darkMode={darkMode} toggleTheme={handleToggleTheme}/>
      </Router>
    </Theme>
  );
};

export default App;
