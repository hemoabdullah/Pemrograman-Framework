import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const ProfileEditPage: NextPage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    nama: 'Hammam Abdullah B.G',
    email: 'Hammam@Polinema.com',
    phone: '+62 812-3456-7890',
    address: 'Malang, Indonesia'
  })

  const handleSave = () => {
    setIsEditing(false)
    // Simpan logic here
    console.log('Profile saved:', formData)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  return (
    <>
      <Head>
        <title>Edit Profile - JOBSHEET PRAKTIKUM</title>
      </Head>
      
      <div className="hero">
        <div className="container">
          <h1>Edit Profile</h1>
          <p>Form Edit Profile dengan Static Routing</p>
        </div>
      </div>
      
      <div className="container">
        <div className="card">
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>✏️ Edit Profile Information</h2>
          
          <div className="grid">
            <div className="card">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Personal Data</h3>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nama Lengkap</label>
                <input 
                  type="text" 
                  value={formData.nama}
                  onChange={(e) => setFormData({...formData, nama: e.target.value})}
                  disabled={!isEditing}
                  style={{ 
                    width: '100%', 
                    padding: '8px', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '4px',
                    backgroundColor: isEditing ? 'white' : 'var(--bg-secondary)'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={!isEditing}
                  style={{ 
                    width: '100%', 
                    padding: '8px', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '4px',
                    backgroundColor: isEditing ? 'white' : 'var(--bg-secondary)'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  disabled={!isEditing}
                  style={{ 
                    width: '100%', 
                    padding: '8px', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '4px',
                    backgroundColor: isEditing ? 'white' : 'var(--bg-secondary)'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Address</label>
                <textarea 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  disabled={!isEditing}
                  rows={3}
                  style={{ 
                    width: '100%', 
                    padding: '8px', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '4px',
                    backgroundColor: isEditing ? 'white' : 'var(--bg-secondary)'
                  }}
                />
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            {isEditing ? (
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button 
                  onClick={handleSave}
                  className="btn btn-primary"
                >
                  💾 Save Profile
                </button>
                <Link href="/profile" className="btn btn-secondary">
                  ❌ Cancel
                </Link>
              </div>
            ) : (
              <button 
                onClick={handleEdit}
                className="btn btn-primary"
              >
                ✏️ Enable Edit Mode
              </button>
            )}
          </div>
          
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link href="/profile" className="btn btn-secondary">
              ← Back to Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileEditPage
