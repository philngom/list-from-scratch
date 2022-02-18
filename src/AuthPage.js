import { signIn, signUp, getUser } from './services/fetch-utils';
import { useState } from 'react';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function handleSignIn() {
    await signIn(email, password);
  }

  async function handleSignOut() {
    await signUp(email, password);
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
          <input value={ password } onChange={e => setPassword(e.target.value)}/>
        </label>
        <button type="submit" onClick={ handleSignIn }>Sign In</button>
        <button type="submit" onClick={ handleSignOut }>Sign Up</button>
      </form>
    </div>
  );
}