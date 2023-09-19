import Link from 'next/link'
import Image from 'next/image'
import { FormatNumber } from './FormatNumber'

const fetchCountries = () => {
  return fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
}

export async function ListOfCountries () {
  const countries = await fetchCountries()
  
  // return  countries.map(country => (
  //   <article key={country.name.common}>
  //     <Link href={`/country/${country.name.common}`}>
  //       {country.name.common}
  //     </Link>
  //   </article>
  // ))  

  return (
    <>
      <section className='grid'>
        {countries.map((country) => {
          const { numericCode, population, region, capital } = country
          return <article key={numericCode}>
            <div>
              <img style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} src={ `${country.flags.svg}`} alt={country.name.common} />
              <div className='info'>
                <Link href={`/country/${country.name.common}`}>
                  <h3 style={{ margin: '8px 0px' }}>{country.name.common}</h3>
                </Link>
                <h4>Poplation: <span>{ FormatNumber(population) }</span></h4>
                <h4>Region: <span>{ region }</span></h4>
                <h4>Capital: <span>{ capital }</span></h4>
              </div>
            </div>
          </article>
        })}
      </section>
    </>
  )

}