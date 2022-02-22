import { addCountry } from './services/fetch-utils';

export default function Country({ country }) {

  async function addCountryToMyList() {
    await addCountry({
      name: country.name.official,
      capital: country.capital,
      flag: country.flags.png
    });
  }

  return (
    <div className='country' onClick={ addCountryToMyList }>
      <h4>{ country.name.official }</h4>
      <img src={country.flags.png}/>
    </div>
  );
}