import { FormatNumber } from '../../components/FormatNumber'
import styles from './Country.module.css'

const fetchSingleCountry = (name) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then(res => res.json())
}


export default async function Country ({ children, params }) {
  const { name } = params
  const country = await fetchSingleCountry(name)
  return (
    <section  className={styles.country}>
      {children}
      <div className={styles.countryInner}>
        <div >
          <img src={`${country[0].flags.svg}`} alt={country[0].name.common} className={styles.flag}/>
        </div>
        <div className={styles.countryDetails}>
          <div>
            <h2>{country[0].name.common}</h2>
            {/* <p><strong>Native Name: </strong> { nameJson.nativeName.deu.common}</p> */}
            <h5>Population:  <span>{FormatNumber(country[0].population)} </span></h5>
            <h5>Region: <span>{country[0].region}</span> </h5>
            <h5>Sub Region: <span>{country[0].subregion}</span> </h5>
          </div>
          <div>
            <h5>Capital: <span>{country[0].capital}</span>  </h5>
            <h5>Top level Domain: <span>{country[0].tld[0]}</span> </h5> 
            {/* <h5>Currencies: </h5> {country[0].currencies[0].name} */}
            <h5>Languages: <span> {country[0].languages[0]}</span></h5> 
          </div>
        </div>
      </div>
      <div>
        <h3>Border countries: </h3>
        <div className={styles.borders}> 
          {country[0].borders.map((border) => {
            return(
              <ul key={border}>
                <li>{border}</li>
              </ul>
              )
          })}
        </div>
      </div>
    </section >
  )
}