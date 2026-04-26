import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/404.module.scss'

export default function Custom404Page() {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>

      <section className={styles.error}>
        <img
          src="/page-not-found.svg"
          alt="Ilustrasi halaman tidak ditemukan"
          className={styles.error__image}
        />

        <h1 className={styles.error__title}>404 - Halaman Tidak Ditemukan</h1>

        <p className={styles.error__description}>
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
          Silakan kembali ke halaman utama untuk melanjutkan.
        </p>

        <Link href="/" className={styles.error__button}>
          Kembali ke Home
        </Link>
      </section>
    </>
  )
}