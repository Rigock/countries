import styles from './Header.module.css'
import { MoonIcon } from '@heroicons/react/24/solid'

export function Header () {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h3>Where in the world?</h3>
        </div>
        <div>
          <MoonIcon className={styles.iconWidth} />Dark Mode
        </div>
      </header>
    </>
  )
}
