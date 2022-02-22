import { useEffect, useState } from 'react';
import Country from './Country';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchAllCountries() {
      const response = await fetch('/.netlify/functions/countries');
      const data = await response.json();
      setCountries(data);
    }
    fetchAllCountries();
  }, []);

  async function handleSearchQuery() {
    const response = await fetch(`/.netlify/functions/search?query=${query}`);
    const data = response.json();
    setCountries(data);
  }

  return (
    <div className='countries'>
      <form onSubmit={ handleSearchQuery }>
        <label>
          <input required value={ query } onChange={e => setQuery(e.target.value) }/>
        </label>
        <button type="submit">Search</button>
      </form>
      {
        countries.map((country, i) =>
          <Country key={country + i} country={country}/>
        )
      }
    </div>
  );
}