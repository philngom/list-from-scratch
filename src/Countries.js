import { useEffect, useState } from 'react';
import { fetchAllCountries } from './services/fetch-utils';
import Country from './Country';


export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    const data = await fetchAllCountries();
    setCountries(data);
  }

  async function handleSearchQuery(e) {
    e.preventDefault();
    const response = await fetch(`/.netlify/functions/search?query=${query}`);
    const data = await response.json();
    data ? setCountries(data) : await fetchAllCountries();
  }

  return (
    <div className='countries'>
      <form onSubmit={ handleSearchQuery }>
        <label>
          Search for a country:
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