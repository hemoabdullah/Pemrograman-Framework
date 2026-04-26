import Link from 'next/link'

import styles from './Register.module.css'

export default function RegisterView() {
  return (
    <section className={styles.register}>
      <h1 className={styles.title}>Halaman Register</h1>
      <p className={styles.description}>
        Tugas 1: Register dibuat menggunakan CSS Module.
      </p>

      <div className={styles.actions}>
        <button className={styles.primaryButton} type="button">
          Create Account
        </button>
        <Link className={styles.secondaryButton} href="/auth/login">
          Back to Login
        </Link>
      </div>
    </section>
  )
}