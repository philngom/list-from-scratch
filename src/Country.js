export default function Country({ country }) {
  return (
    <div className='country'>
      <h4>{ country.name.official }</h4>
      <img src={country.flags.png}/>
    </div>
  );
}