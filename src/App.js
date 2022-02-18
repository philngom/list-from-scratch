import './App.css';
import { logOut, getUser } from './services/fetch-utils.js';
import { useEffect } from 'react';
import AuthPage from './AuthPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthPage />
      </header>
    </div>
  );
}

export default App;
