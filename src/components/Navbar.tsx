import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

const Navbar: NextPage = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
      </nav>
    </header>
  )
}

export default Navbar
