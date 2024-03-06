import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import useLocalStorage from '../hooks/useLocalStorage';
import GlobalStyle from './GlobalStyle';
import Main from './Main';
import Theme from './Theme';
import * as firebase from '../utils/firebaseConfig';

const firebaseConfig = {
  apiKey: firebase.API_KEY,
  authDomain: firebase.AUTH_DOMAIN,
  databaseURL: firebase.DATABASE_URL,
  projectId: firebase.PROJECT_ID,
  storageBucket: firebase.STORAGE_BUCKET,
  messagingSenderId: firebase.MESSAGING_SENDER_ID,
  appId: firebase.APP_ID,
  measurementId: firebase.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);

  const handleToggleTheme = (evt) => {
    setDarkMode(evt?.target?.checked);
  };

  return (
    <Theme darkMode={darkMode}>
      <GlobalStyle darkMode={darkMode} />
      <Router>
        <Main darkMode={darkMode} toggleTheme={handleToggleTheme} />
      </Router>
    </Theme>
  );
};

export default App;
