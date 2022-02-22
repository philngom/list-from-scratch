import { signIn, signUp } from './services/fetch-utils';
import './AuthPage.css';
import { useState } from 'react';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function handleSignIn() {
    const user = await signIn(email, password);
    setUser(user);
  }

  async function handleSignOut() {
    const user = await signUp(email, password);
    setUser(user);
  }


  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>
          Email:
          <input value={ email } onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input value={ password } type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <button type="submit" onClick={ handleSignIn }>Sign In</button>
        <button type="submit" onClick={ handleSignOut }>Sign Up</button>
      </form>
    </div>
  );
}