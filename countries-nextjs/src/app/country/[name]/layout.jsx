import Image from 'next/image'
import Link from 'next/link'
import { FormatNumber } from '../../components/FormatNumber'

const fetchSingleCountry = (name) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then(res => res.json())
}


export default async function Country ({ children, params }) {
  const { name } = params
  const country = await fetchSingleCountry(name)
  const nameJson = country[0].name
  // console.log('country name : : ', country[0]);
  // console.log('country native name : : ', nameJson.nativeName.deu.common);
  return (
    <article>
      {children}
      <h1>{country[0].name.common}</h1>
      <Image width={100} height={80} src={ `${country[0].flags.svg}`}/>
      {/* <p><strong>Native Name: </strong> { nameJson.nativeName.deu.common}</p> */}
      <p><strong>Population: </strong> {FormatNumber(country[0].population)}</p>
      <p><strong>Region: </strong> {country[0].region}</p>
      <p><strong>Sub Region: </strong> {country[0].subregion}</p>
      <p><strong>Capital: </strong> {country[0].capital}</p>
      <p><strong>Top level Domain: </strong> {country[0].tld[0]}</p>
      {/* <p><strong>Currencies: </strong> {country[0].currencies['EUR' ? 'EUR' : 'USD'].name}</p> */}
      {/* <p><strong>Languages: </strong> <div > {country[0].languages}</div></p> */}
      {/*<p><strong>Border countries: </strong> {country[0].}</p> */}
    </article>
  )
}