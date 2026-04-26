import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'

function formatCurrency(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount)
}

export default function ProductPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/produk')
      const payload = await response.json()

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || 'Gagal mengambil data produk.')
      }

      setProducts(payload.data || [])
      setMessage(payload.message || 'Data berhasil diambil.')
    } catch (error) {
      setMessage(error.message)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <>
      <Head>
        <title>Daftar Produk - Week 7</title>
      </Head>

      <main className="productsWrapper">
        <div className="productsHeader">
          <div>
            <p className="eyebrow">Week 7 API Routes</p>
            <h1>Daftar Produk</h1>
            <p className="subtitle">
              Data diambil dari endpoint <strong>/api/produk</strong> yang terintegrasi
              dengan Firestore.
            </p>
          </div>
          <button
            className="button primary"
            onClick={fetchProducts}
            disabled={loading}
          >
            {loading ? 'Memuat...' : 'Refresh Data'}
          </button>
        </div>

        <p className="statusText">{message}</p>

        {loading ? (
          <p>Memuat data produk...</p>
        ) : products.length === 0 ? (
          <p>Belum ada data produk.</p>
        ) : (
          <section className="grid">
            {products.map((item) => (
              <article key={item.id} className="card">
                <p className="badge">{item.category || 'Uncategorized'}</p>
                <h2>{item.name}</h2>
                <p className="price">{formatCurrency(item.price || 0)}</p>
              </article>
            ))}
          </section>
        )}
      </main>
    </>
  )
}