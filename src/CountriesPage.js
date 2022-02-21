import { useLocation } from 'react-router-dom';
import Countries from './Countries';
import MyCountries from './MyCountries';
import { useEffect, useState } from 'react';


export default function CountriesPage({ countries }) {

  const location = useLocation();
  return (
    <div>
      {/* {
        countries.map((country, i) => location.pathname.includes('countries')
          ? <Countries key={countries + i} country={country}/>
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