import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const AppSettingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>App Setting - JOBSHEET PRAKTIKUM</title>
        <meta name="description" content="App Setting Page - Jobsheet Praktikum Pemrograman Framework" />
      </Head>
      
      <div className="page-container">
        <h1 className="page-title">App Setting</h1>
        <div className="page-content">
          <h2 className="text-2xl font-semibold mb-4">Pengaturan Aplikasi</h2>
          
          <div className="space-y-4">
            <p>
              Halaman ini juga merupakan bagian dari nested routing. File ini berada di
              <code className="bg-gray-100 px-2 py-1 rounded"> pages/setting/app.tsx </code>
              dan dapat diakses melalui URL <code className="bg-gray-100 px-2 py-1 rounded">/setting/app</code>.
            </p>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Pengaturan Aplikasi:</h3>
              <div className="space-y-3">
                <div className="border rounded p-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Notifikasi Email</span>
                  </label>
                </div>
                
                <div className="border rounded p-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Mode Gelap</span>
                  </label>
                </div>
                
                <div className="border rounded p-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Simpan Riwayat</span>
                  </label>
                </div>
                
                <div className="border rounded p-3">
                  <label className="block text-sm font-medium mb-1">Tema Warna</label>
                  <select className="w-full border rounded px-3 py-2">
                    <option>Biru</option>
                    <option>Hijau</option>
                    <option>Merah</option>
                    <option>Ungu</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-x-4">
              <Link href="/setting/user" className="text-blue-600 hover:underline">
                ← User Setting
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

export default AppSettingPage
