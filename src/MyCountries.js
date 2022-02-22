import { useEffect, useState } from 'react';
import { getMyCountries, visitCountry } from './services/fetch-utils';

export default function MyCountries() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  async function fetchAllCountries() {
    const data = await getMyCountries();
    setCountries(data);
  }

  async function handleClick(id, visited) {
    if (visited) {
      await visitCountry(id, false);
    } else {
      await visitCountry(id, true);
    }
    fetchAllCountries();
  }

  return (
    <div className='countries'>
      {
        countries.map((country, i) =>
          <div key={country + i} className='country' onClick={() => handleClick(country.id, country.visited) }>
            <h4>{ country.name } {country.visited ? '✈️' : ''}</h4>
            <img src={country.flag}/>
          </div>
        )
      }
    </div>
  );
}