import { getProductsData } from '../../utils/db/servicefirebase'

const staticProducts = [
  {
    id: 'shoe-001',
    name: 'Runner Pro X',
    category: 'Running',
    price: 1299000,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'shoe-002',
    name: 'Street Glide',
    category: 'Lifestyle',
    price: 999000,
    image:
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'shoe-003',
    name: 'Court Force',
    category: 'Basketball',
    price: 1499000,
    image:
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=1000&q=80'
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
    const firebaseProducts = await getProductsData('products')

    if (!firebaseProducts || firebaseProducts.length === 0) {
      return res.status(200).json({
        success: true,
        source: 'static-fallback',
        message: 'Data Firestore belum tersedia, menampilkan data statis.',
        data: staticProducts
      })
    }

    return res.status(200).json({
      success: true,
      source: 'firestore',
      message: 'Data produk berhasil diambil dari Firestore.',
      data: firebaseProducts
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Gagal mengambil data produk.',
      error: error.message,
      data: staticProducts
    })
  }
}
