import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ProductPage() {
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const isLoggedIn = window.localStorage.getItem('week4-auth') === 'true'

    if (!isLoggedIn) {
      router.replace('/auth/login')
      return
    }

    setIsReady(true)
  }, [router])

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('week4-auth')
    }

    router.push('/auth/login')
  }

  return (
    <>
      <Head>
        <title>Product</title>
      </Head>

      <section className="pageBlock">
        <p className="eyebrow">Protected Route</p>
        <h1>Product Page</h1>
        <p className="lead">
          Jika user belum login, halaman ini otomatis redirect ke login.
        </p>

        {isReady ? (
          <div className="panel">
            <p>Login berhasil. Ini simulasi halaman product setelah autentikasi.</p>
            <div className="buttonRow">
              <button className="primaryButton" type="button" onClick={handleLogout}>
                Logout
              </button>
              <Link className="secondaryButton" href="/category/tech/javascript">
                Open Category
              </Link>
            </div>
          </div>
        ) : (
          <div className="panel">
            <p>Memeriksa status login...</p>
          </div>
        )}
      </section>
    </>
  )
}