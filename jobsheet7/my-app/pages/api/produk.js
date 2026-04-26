import { getProductsData } from '../../utils/db/servicefirebase'

const staticProducts = [
  {
    id: 'p-001',
    name: 'Mechanical Keyboard',
    price: 850000,
    category: 'Peripheral'
  },
  {
    id: 'p-002',
    name: 'Wireless Mouse',
    price: 350000,
    category: 'Peripheral'
  },
  {
    id: 'p-003',
    name: '27 inch Monitor',
    price: 2750000,
    category: 'Display'
  }
]

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  try {
    const products = await getProductsData('products')

    if (!products || products.length === 0) {
      return res.status(200).json({
        success: true,
        source: 'static-fallback',
        message: 'Firestore kosong atau belum dikonfigurasi, data statis ditampilkan.',
        data: staticProducts
      })
    }

    return res.status(200).json({
      success: true,
      source: 'firestore',
      message: 'Data produk berhasil diambil dari Firestore.',
      data: products
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat mengambil data produk.',
      error: error.message,
      data: staticProducts
    })
  }
}