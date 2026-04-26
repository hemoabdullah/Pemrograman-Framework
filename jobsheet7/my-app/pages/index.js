import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Week 7 - API Routes & Firebase</title>
      </Head>

      <main className="shell">
        <p className="eyebrow">Week 7 Practicum</p>
        <h1>API Routes pada Next.js dan Integrasi Firebase</h1>
        <p className="subtitle">
          Halaman ini menampilkan implementasi endpoint <strong>/api/produk</strong>{' '}
          dan fetch data dinamis pada route <strong>/produk</strong>.
        </p>

        <div className="actions">
          <Link href="/produk" className="button primary">
            Buka Halaman Produk
          </Link>
          <Link href="/api/produk" className="button secondary">
            Buka API Produk
          </Link>
        </div>
      </main>
    </>
  )
}