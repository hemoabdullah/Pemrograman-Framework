import Head from 'next/head'
import { useEffect, useState } from 'react'

import ProductView from '../../src/views/products'

export default function ProductManualPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    let isSubscribed = true

    const getProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/products')
        const payload = await response.json()

        if (!response.ok || !payload.success) {
          throw new Error(payload.message || 'Gagal mengambil data produk')
        }

        if (isSubscribed) {
          setProducts(payload.data || [])
          setMessage(payload.message || 'Data berhasil dimuat')
          setError('')
        }
      } catch (fetchError) {
        if (isSubscribed) {
          setError(fetchError.message)
          setProducts([])
        }
      } finally {
        if (isSubscribed) {
          setLoading(false)
        }
      }
    }

    getProducts()

    return () => {
      isSubscribed = false
    }
  }, [])

  return (
    <>
      <Head>
        <title>Produk Manual CSR - Week 8</title>
      </Head>

      <ProductView
        mode="Manual useEffect"
        products={products}
        loading={loading}
        error={error}
        message={message}
      />
    </>
  )
}
