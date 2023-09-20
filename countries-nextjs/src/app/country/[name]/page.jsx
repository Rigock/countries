import Link from 'next/link'
import styles from '../../components/Header.module.css'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

export default function CountryPage () {
  return (
    <>
      <Link className={styles.backBtn} href={'/'}>
        <ArrowLeftIcon className={styles.iconWidth} /> Back
      </Link>
    </>
  )
}
