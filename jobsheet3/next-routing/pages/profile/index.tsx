import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile - JOBSHEET PRAKTIKUM</title>
      </Head>
      
      <div className="hero">
        <div className="container">
          <h1>User Profile</h1>
          <p>Halaman Profile dengan Static Routing</p>
        </div>
      </div>
      
      <div className="container">
        <div className="card">
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>👤 Profile Information</h2>
          
          <div className="grid">
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Personal Data</h3>
              <p><strong>Nama:</strong> Hammam Abdullah B.G</p>
              <p><strong>NIM:</strong> 2341720203</p>
              <p><strong>Kelas:</strong> TI - 3I</p>
              <p><strong>Program Studi:</strong> Information Technology</p>
            </div>
            
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Contact</h3>
              <p><strong>Email:</strong> Hammam@Polinema.com</p>
              <p><strong>Phone:</strong> +62 812-3456-7890</p>
              <p><strong>Address:</strong> Malang, Indonesia</p>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link href="/profile/edit" className="btn btn-primary">
              ✏️ Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
