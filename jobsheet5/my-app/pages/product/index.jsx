import Head from 'next/head'

import ProductPageView from '../../src/views/product/ProductPage'

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <ProductPageView />
    </>
  )
}