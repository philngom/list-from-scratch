import { useLocation } from 'react-router-dom';
import Countries from './Countries';
import MyCountries from './MyCountries';
import { useEffect, useState } from 'react';


export default function CountriesPage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchAllCountries() {
      const response = await fetch('/.netlify/functions/countries');
      const data = await response.json();
      setCountries(data);
      console.log(data);
    }
    fetchAllCountries();
  }, []);

  const location = useLocation();
  return (
    <div>
      {/* {
        countries.map((country, i) => location.pathname.includes('countries')
          ? <Country key={country + i} country={country}/>
          : <MyCountries key={country + i} country={country}/>
        )
      } */}
      {

        location.pathname.includes('my-countries')
          ? <MyCountries />
          : <Countries />
      }
    </div>
  );
}