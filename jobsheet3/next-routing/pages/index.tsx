import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>JOBSHEET PRAKTIKUM - Routing Next.js</title>
        <meta name="description" content="Jobsheet Praktikum Pemrograman Framework" />
      </Head>
      
      <div className="hero">
        <div className="container">
          <h1>JOBSHEET PRAKTIKUM</h1>
          <p>Routing, Nested Routing, Dynamic Routing, dan Layouting pada Next.js</p>
        </div>
      </div>
      
      <div className="container">
        <div className="grid">
          <div className="card">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>📚 Mata Kuliah</h3>
            <p>Pemrograman Framework</p>
          </div>
          
          <div className="card">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>🎯 Topik Praktikum</h3>
            <p>Routing & Layouting pada Next.js (Pages Router)</p>
          </div>
          
          <div className="card">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>⏰ Waktu Praktikum</h3>
            <p>2 × 50 menit</p>
          </div>
        </div>
        
        <div className="card" style={{ marginTop: '40px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Tujuan Praktikum</h2>
          <p>Setelah menyelesaikan praktikum ini, mahasiswa mampu:</p>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
            <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Memahami konsep Pages Router pada Next.js
            </li>
            <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Membuat routing statis berbasis file dan folder
            </li>
            <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Mengimplementasikan nested routing
            </li>
            <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Mengimplementasikan dynamic routing menggunakan parameter URL
            </li>
            <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0 }}>✓</span> Membuat layout global menggunakan komponen layout (App Shell)
            </li>
          </ul>
        </div>
        
        <div className="card" style={{ marginTop: '40px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '30px' }}>Navigasi</h3>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about" className="btn btn-primary">
              About
            </Link>
            <Link href="/setting/user" className="btn btn-secondary">
              Setting User
            </Link>
            <Link href="/setting/app" className="btn btn-secondary">
              Setting App
            </Link>
            <Link href="/produk" className="btn btn-primary">
              Produk
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
