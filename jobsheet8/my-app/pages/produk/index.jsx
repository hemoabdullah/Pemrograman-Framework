import Head from 'next/head'
import useSWR from 'swr'

import ProductView from '../../src/views/products'
import { fetcher } from '../../utils/swr/fetcher'

export default function ProductSWRPage() {
  const { data, error, isLoading, mutate } = useSWR('/api/products', fetcher)

  return (
    <>
      <Head>
        <title>Produk SWR - Week 8</title>
      </Head>

      <ProductView
        mode="SWR"
        products={data?.data || []}
        loading={isLoading}
        error={error ? error.message : ''}
        message={data?.message || ''}
        onRefresh={() => mutate()}
      />
    </>
  )
}
