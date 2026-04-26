import Head from 'next/head'
import Link from 'next/link'

const routeSamples = [
  ['/category/tech/javascript', '/category/tech/javascript'],
  ['/category/design/ui', '/category/design/ui'],
  ['/auth/login', '/auth/login'],
  ['/auth/register', '/auth/register'],
  ['/product', '/product'],
]

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Week 4 - Link & Navigating</title>
        <meta
          name="description"
          content="Praktikum Week 4 Next.js Pages Router"
        />
      </Head>

      <section className="hero">
        <p className="eyebrow">Week 4 Practical</p>
        <h1>Linking, Catch-All Routing, and Imperative Navigation</h1>
        <p className="lead">
          Halaman ini dipakai untuk menguji routing, navigasi antar halaman,
          dan redirect berbasis kondisi.
        </p>
      </section>

      <section className="cardGrid">
        <article className="panel">
          <h2>Route Demo</h2>
          <ul className="navList">
            <li>
              <Link href="/category/tech/javascript">/category/tech/javascript</Link>
            </li>
            <li>
              <Link href="/category/design/ui">/category/design/ui</Link>
            </li>
            <li>
              <Link href="/auth/login">/auth/login</Link>
            </li>
            <li>
              <Link href="/auth/register">/auth/register</Link>
            </li>
            <li>
              <Link href="/product">/product</Link>
            </li>
          </ul>
        </article>

        <article className="panel">
          <h2>Reference URLs</h2>
          <ul className="navList">
            {routeSamples.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  )
}