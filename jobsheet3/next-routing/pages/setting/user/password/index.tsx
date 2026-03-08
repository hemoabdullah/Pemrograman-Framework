import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const PasswordPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Password Settings - JOBSHEET PRAKTIKUM</title>
        <meta name="description" content="Password Settings Page - Jobsheet Praktikum Pemrograman Framework" />
      </Head>
      
      <div className="page-container">
        <h1 className="page-title">Password Settings</h1>
        <div className="page-content">
          <h2 className="text-2xl font-semibold mb-4">Pengaturan Password</h2>
          
          <div className="space-y-4">
            <p>
              Halaman ini menunjukkan nested routing yang lebih dalam. File ini berada di
              <code className="bg-gray-100 px-2 py-1 rounded"> pages/setting/user/password/index.tsx </code>
              dan dapat diakses melalui URL <code className="bg-gray-100 px-2 py-1 rounded">/setting/user/password</code>.
            </p>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Ubah Password:</h3>
              <div className="space-y-3">
                <div className="border rounded p-3">
                  <label className="block text-sm font-medium mb-1">Password Lama</label>
                  <input 
                    type="password" 
                    className="w-full border rounded px-3 py-2" 
                    placeholder="Masukkan password lama"
                  />
                </div>
                
                <div className="border rounded p-3">
                  <label className="block text-sm font-medium mb-1">Password Baru</label>
                  <input 
                    type="password" 
                    className="w-full border rounded px-3 py-2" 
                    placeholder="Masukkan password baru"
                  />
                </div>
                
                <div className="border rounded p-3">
                  <label className="block text-sm font-medium mb-1">Konfirmasi Password Baru</label>
                  <input 
                    type="password" 
                    className="w-full border rounded px-3 py-2" 
                    placeholder="Konfirmasi password baru"
                  />
                </div>
                
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Ubah Password
                </button>
              </div>
            </div>
            
            <div className="mt-6 space-x-4">
              <Link href="/setting/user" className="text-blue-600 hover:underline">
                ← Kembali ke User
              </Link>
              <Link href="/" className="text-blue-600 hover:underline">
                Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordPage
