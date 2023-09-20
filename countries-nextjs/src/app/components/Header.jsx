import styles from './Header.module.css'

export function Header () {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h3>Where in the world?</h3>
        </div>
        <div>
          <i className='fas fa-moon'></i>Dark Mode
        </div>
      </header>
    </>
  )
}
