import Head from 'next/head'

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/products').catch(() => null)
  const payload = response ? await response.json() : { data: [] }

  return {
    props: {
      products: payload.data || []
    }
  }
}

export default function ProductServerPage({ products }) {
  return (
    <>
      <Head>
        <title>Produk SSR - Week 8</title>
      </Head>

      <main className="shell">
        <p className="eyebrow">Perbandingan Rendering</p>
        <h1>Server Side Rendering (SSR)</h1>
        <p className="subtitle">
          Data diambil di server menggunakan <strong>getServerSideProps</strong>
          sebelum HTML dikirim ke browser.
        </p>
        <p className="statusText">Total produk: {products.length}</p>
      </main>
    </>
  )
}
