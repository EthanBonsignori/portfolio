import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import useLocalStorage from '../hooks/useLocalStorage';
import GlobalStyle from './GlobalStyle';
import Main from './Main';
import Theme from './Theme';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
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
