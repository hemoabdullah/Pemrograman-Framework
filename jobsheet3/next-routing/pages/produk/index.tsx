import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const ProdukPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Produk - JOBSHEET PRAKTIKUM</title>
        <meta name="description" content="Produk Page - Jobsheet Praktikum Pemrograman Framework" />
      </Head>
      
      <div className="hero">
        <div className="container">
          <h1>Daftar Produk</h1>
          <p>Katalog Produk dengan Dynamic Routing</p>
        </div>
      </div>
      
      <div className="container">
        <div className="card">
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Katalog Produk</h2>
          
          <p style={{ marginBottom: '30px', lineHeight: '1.8' }}>
            Halaman ini menunjukkan daftar produk. File ini berada di <code style={{ background: 'var(--bg-secondary)', padding: '4px 8px', borderRadius: '4px' }}>pages/produk/index.tsx</code> 
            dan dapat diakses melalui URL <code style={{ background: 'var(--bg-secondary)', padding: '4px 8px', borderRadius: '4px' }}>/produk</code>.
          </p>
          
          <div className="grid">
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>👟 Sepatu Olahraga</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Sepatu nyaman untuk olahraga</p>
              <Link href="/produk/sepatu" className="btn btn-primary">
                Lihat Detail →
              </Link>
            </div>
            
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>👕 Baju Kaos</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Kaos berkualitas tinggi</p>
              <Link href="/produk/baju" className="btn btn-primary">
                Lihat Detail →
              </Link>
            </div>
            
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>🎒 Tas Ransel</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Tas praktis dan stylish</p>
              <Link href="/produk/tas" className="btn btn-primary">
                Lihat Detail →
              </Link>
            </div>
            
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>🧢 Topi Baseball</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Topi fashion trendi</p>
              <Link href="/produk/topi" className="btn btn-primary">
                Lihat Detail →
              </Link>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link href="/" className="btn btn-secondary">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProdukPage
