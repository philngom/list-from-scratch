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

  async function handleClick(id) {
    await visitCountry(id);
  }

  return (
    <div className='countries'>
      {
        countries.map((country, i) =>
          <div key={country + i} className='country' onClick={() => handleClick(country.id) }>
            <h4>{ country.name } {}</h4>
            <img src={country.flag}/>
          </div>
        )
      }
    </div>
  );
}