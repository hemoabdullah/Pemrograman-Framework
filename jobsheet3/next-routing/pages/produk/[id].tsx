import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ProdukDetailProps {
  id: string
}

const ProdukDetailPage: NextPage<ProdukDetailProps> = ({ id }) => {
  const router = useRouter()
  
  // Log untuk debugging
  console.log('Product ID:', id)
  console.log('Router query:', router.query)
  
  // Data produk contoh
  const produkData: Record<string, { nama: string; deskripsi: string; harga: string; emoji: string }> = {
    'sepatu': {
      nama: 'Sepatu Olahraga',
      deskripsi: 'Sepatu nyaman dan berkualitas tinggi untuk berbagai aktivitas olahraga. Dibuat dengan material premium dan desain ergonomis.',
      harga: 'Rp 450.000',
      emoji: '👟'
    },
    'baju': {
      nama: 'Baju Kaos',
      deskripsi: 'Kaos dengan bahan katun pilihan yang nyaman dipakai sehari-hari. Tersedia berbagai ukuran dan warna.',
      harga: 'Rp 150.000',
      emoji: '👕'
    },
    'tas': {
      nama: 'Tas Ransel',
      deskripsi: 'Tas ransel modern dengan banyak kompartemen untuk menyimpan barang-barang penting Anda. Water resistant dan durable.',
      harga: 'Rp 350.000',
      emoji: '🎒'
    },
    'topi': {
      nama: 'Topi Baseball',
      deskripsi: 'Topi baseball dengan desain trendi dan bahan berkualitas. Melindungi dari sinar matahari dan menambah gaya.',
      harga: 'Rp 120.000',
      emoji: '🧢'
    }
  }
  
  const produk = produkData[id] || {
    nama: `Produk ${id}`,
    deskripsi: 'Deskripsi produk tidak tersedia.',
    harga: 'Rp 0',
    emoji: '📦'
  }
  
  return (
    <>
      <Head>
        <title>{produk.nama} - JOBSHEET PRAKTIKUM</title>
        <meta name="description" content={`Detail produk ${produk.nama}`} />
      </Head>
      
      <div className="hero">
        <div className="container">
          <h1>Detail Produk</h1>
          <p>Dynamic Routing dengan parameter: {id}</p>
        </div>
      </div>
      
      <div className="container">
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
            <span style={{ fontSize: '3rem', marginRight: '20px' }}>{produk.emoji}</span>
            <div>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>{produk.nama}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Halaman ini menggunakan dynamic routing. File: <code style={{ background: 'var(--bg-secondary)', padding: '2px 6px', borderRadius: '3px' }}>pages/produk/[id].tsx</code>
              </p>
            </div>
          </div>
          
          <div className="grid">
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>📝 Deskripsi</h3>
              <p style={{ lineHeight: '1.8', color: 'var(--text-primary)' }}>{produk.deskripsi}</p>
            </div>
            
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>💰 Harga</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{produk.harga}</p>
            </div>
          </div>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary">
                🛒 Tambah ke Keranjang
              </button>
              <button className="btn btn-secondary">
                ⚡ Beli Langsung
              </button>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/produk" className="btn btn-secondary">
              ← Kembali ke Daftar Produk
            </Link>
            <Link href="/" className="btn btn-secondary">
              🏠 Beranda
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

// Get server side props untuk mengambil parameter ID
export const getServerSideProps: GetServerSideProps<ProdukDetailProps> = async (context) => {
  const { id } = context.params as { id: string }
  
  return {
    props: {
      id
    }
  }
}

export default ProdukDetailPage
