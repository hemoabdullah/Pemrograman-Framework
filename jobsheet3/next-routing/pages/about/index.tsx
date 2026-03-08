import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - JOBSHEET PRAKTIKUM</title>
        <meta name="description" content="About Page - Jobsheet Praktikum Pemrograman Framework" />
      </Head>
      
      <div className="hero">
        <div className="container">
          <h1>About</h1>
          <p>Tentang Jobsheet Praktikum</p>
        </div>
      </div>
      
      <div className="container">
        <div className="card">
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Tentang Jobsheet Praktikum</h2>
          
          <p style={{ marginBottom: '30px', lineHeight: '1.8' }}>
            Jobsheet ini dirancang untuk membantu mahasiswa memahami konsep routing dan layouting pada Next.js
            menggunakan Pages Router. Praktikum ini mencakup berbagai teknik routing dari yang paling dasar
            hingga yang lebih kompleks.
          </p>
          
          <div className="grid">
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>📖 Materi yang Dipelajari:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>→</span> Static Routing - routing berbasis file
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>→</span> Folder-based Routing - routing menggunakan folder struktur
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>→</span> Nested Routing - routing bersarang
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>→</span> Dynamic Routing - routing dengan parameter dinamis
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>→</span> Global Layout - layout global dengan App Shell
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>🛠️ Teknologi yang Digunakan:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>•</span> Next.js (Pages Router)
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>•</span> TypeScript
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>•</span> Custom CSS dengan CSS Variables
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>•</span> React
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link href="/" className="btn btn-primary">
              ← Kembali ke Halaman Utama
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
