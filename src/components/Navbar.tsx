import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'

const Navbar: NextPage = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a>
            <Image
              src="/f1_logo.svg"
              alt="F1 logo"
              width={130}
              height={32}
            />
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
