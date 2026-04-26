import Link from 'next/link'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={`${styles.navbar} big`}>
      <div className={styles.inner}>
        <strong>Week 5</strong>
        <nav className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
          <Link href="/product">Product</Link>
        </nav>
      </div>
    </header>
  )
}