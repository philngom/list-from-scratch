import { useLocation } from 'react-router-dom';
import Countries from './Countries';
import MyCountries from './MyCountries';

export default function CountriesPage() {

  const location = useLocation();
  return (
    <div>
      {
        location.pathname.includes('my-countries')
          ? <MyCountries />
          : <Countries />
      }
    </div>
  );
}