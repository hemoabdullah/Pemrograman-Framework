import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Week 6 - Custom Document & Error</title>
      </Head>

      <section className="hero">
        <p className="eyebrow">Week 6 Practical</p>
        <h1>Custom Document dan Custom Error Page</h1>
        <p className="lead">
          Uji halaman 404 dengan membuka route yang tidak ada, misalnya
          <strong> /dashboard</strong>.
        </p>
        <Link className="cta" href="/dashboard">
          Coba Route Tidak Ditemukan
        </Link>
      </section>
    </>
  )
}