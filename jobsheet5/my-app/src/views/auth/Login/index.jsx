import Link from 'next/link'

import styles from './Login.module.scss'

export default function LoginView() {
  return (
    <section className={styles.loginCard}>
      <p className={styles.label}>Auth</p>

      <h1
        className="text-3xl font-bold text-blue-600 tracking-tight mb-4"
        style={{ color: 'red', borderRadius: '10px', padding: '10px' }}
      >
        Halaman Login
      </h1>

      <p className={styles.description}>
        Halaman ini memakai kombinasi SCSS module, Tailwind utility class, dan
        inline style.
      </p>

      <div className={styles.buttonRow}>
        <button className={styles.primaryButton} type="button">
          Login
        </button>
        <Link className={styles.secondaryButton} href="/auth/register">
          Register
        </Link>
      </div>
    </section>
  )
}