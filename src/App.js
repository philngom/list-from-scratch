import './App.css';
import { logOut, getUser } from './services/fetch-utils.js';
import { useEffect, useState } from 'react';
import AuthPage from './AuthPage.js';
import CountriesPage from './CountriesPage.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
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

  async function handleLogOut() {
    await logOut();
    setUser(null);
  }

  return (
    <Router>
      <div className="App">
        <header>
          {
            user &&
            <ul>
              <li>
                <Link to='/my-countries'></Link>
              </li>
              <li>
                <button onClick={ handleLogOut }>Logout</button>
              </li>
            </ul>
          }
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              {
                user
                  ? <Redirect to='/my-countries' />
                  : <AuthPage setUser={ setUser } />
              }
            </Route>
            <Route exact path='/my-countries'>
              {
                user
                  ? <CountriesPage />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
