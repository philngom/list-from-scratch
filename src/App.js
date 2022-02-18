import './App.css';
import { logOut, getUser } from './services/fetch-utils.js';
import { useEffect, useState } from 'react';
import AuthPage from './AuthPage.js';
import CountriesPage from './CountriesPage.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      const signedInUser = await getUser();
      setUser(signedInUser);
    }
    fetchUser();
  }, []);

  return (
    <div className="App">
      <header>
        {
          user &&
          <button>Logout</button>
        }
      </header>
      <main>

        <AuthPage />
      </main>
    </div>
  );
}

export default App;
