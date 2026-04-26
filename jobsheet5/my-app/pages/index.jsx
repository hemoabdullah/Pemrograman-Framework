import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Week 5 - Styling</title>
      </Head>

      <section className="homeHero">
        <p className="homeLabel">Week 5 Practical</p>
        <h1>Styling pada Next.js Pages Router</h1>
        <p>
          Halaman ini menampilkan kombinasi Global CSS, CSS Module, SCSS, Inline
          Style, dan Tailwind CSS.
        </p>
      </section>

      <section className="homePanel">
        <h2>Halaman Uji</h2>
        <ul>
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
      </section>
    </>
  )
}