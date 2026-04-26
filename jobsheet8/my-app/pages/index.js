import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Week 8 - CSR & Data Fetching</title>
      </Head>

      <main className="shell">
        <p className="eyebrow">Week 8 Practical</p>
        <h1>Client Side Rendering & Data Fetching</h1>
        <p className="subtitle">
          Praktikum ini mengimplementasikan data fetching manual dengan{' '}
          <strong>useEffect</strong>, refactor ke <strong>SWR</strong>, serta skeleton
          loading.
        </p>

        <section className="actions">
          <Link className="button primary" href="/produk/manual">
            Lihat Versi useEffect
          </Link>
          <Link className="button secondary" href="/produk">
            Lihat Versi SWR
          </Link>
          <Link className="button secondary" href="/api/products">
            Buka API /api/products
          </Link>
        </section>
      </main>
    </>
  )
}
