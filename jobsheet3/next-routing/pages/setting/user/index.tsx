import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const UserIndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>User - JOBSHEET PRAKTIKUM</title>
        <meta name="description" content="User Page - Jobsheet Praktikum Pemrograman Framework" />
      </Head>
      
      <div className="hero">
        <div className="container">
          <h1>User Management</h1>
          <p>Halaman User dengan Nested Routing</p>
        </div>
      </div>
      
      <div className="container">
        <div className="card">
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Daftar Pengguna</h2>
          
          <div className="grid">
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)' }}>John Doe</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Hammam@Polinema.com</p>
            </div>
            
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)' }}>Jane Smith</h3>
              <p style={{ color: 'var(--text-secondary)' }}>jane.smith@example.com</p>
            </div>
            
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)' }}>Bob Johnson</h3>
              <p style={{ color: 'var(--text-secondary)' }}>bob.johnson@example.com</p>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="btn btn-secondary">
                ← Beranda
              </Link>
              <Link href="/setting/user/password" className="btn btn-primary">
                Password Settings →
              </Link>
              <Link href="/setting/app" className="btn btn-primary">
                App Setting →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserIndexPage
