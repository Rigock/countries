import Link from 'next/link'
import { FormatNumber } from './FormatNumber' 
import { SearchBox } from './SearchBox' 

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
    <SearchBox />
      <section className='grid'  style={{ paddingLeft: '40px', paddingRight: '40px'}}>
        {countries.map((country) => {
          const { numericCode, population, region, capital } = country
          return <article key={numericCode}>
            <div>
                <Link style={{ color: '#fff', textDecoration: 'none'}} href={`/country/${country.name.common}`}>
                  <img src={ `${country.flags.svg}`} alt={country.name.common} />
                </Link>
              <div className='info'>
                <h3 style={{ margin: '8px 0px' }}>{country.name.common}</h3>
                <h4>Population: <span>{ FormatNumber(population) }</span></h4>
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