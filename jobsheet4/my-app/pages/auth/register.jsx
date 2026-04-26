import Head from 'next/head'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <section className="pageBlock">
        <p className="eyebrow">Auth</p>
        <h1>Register Page</h1>
        <p className="lead">Navigasi antar halaman auth dibuat menggunakan Link.</p>

        <div className="buttonRow">
          <Link className="primaryButton" href="/auth/login">
            Back to Login
          </Link>
          <Link className="secondaryButton" href="/auth/login">
            Login Link
          </Link>
        </div>
      </section>
    </>
  )
}