import { useEffect, useState } from 'react';

import CountriesPage from './CountriesPage';
import Country from './Country';

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchAllCountries() {
      const response = await fetch('/.netlify/functions/countries');
      const data = await response.json();
      setCountries(data);
    }
    fetchAllCountries();
  }, []);

  return (
    <div className='countries'>
      {
        countries.map((country, i) =>
          <Country key={country + i} country={country}/>
        )
      }
    </div>
  );
}