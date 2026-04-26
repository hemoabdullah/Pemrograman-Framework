import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('week4-auth', 'true')
    }

    router.push('/product')
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <section className="pageBlock">
        <p className="eyebrow">Auth</p>
        <h1>Login Page</h1>
        <p className="lead">
          Tombol di bawah menggunakan navigasi imperatif untuk pindah ke product.
        </p>

        <div className="buttonRow">
          <button className="primaryButton" type="button" onClick={handleLogin}>
            Login to Product
          </button>
          <Link className="secondaryButton" href="/auth/register">
            Go to Register
          </Link>
        </div>
      </section>
    </>
  )
}