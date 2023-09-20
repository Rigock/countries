import styles from './Header.module.css'

export  function SearchBox () {
  return (
    <section className={styles.filter}>
      <form  className={styles.formControl}>
        <input 
         type="search"name="search" id="search"
         placeholder="Search for a country"/>
      </form>

      <section className={styles.regionFilter}>
        <select name="select" id="select" className={styles.select}>
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>
    </section>
  )
}