import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container container">
        <div className="nav-brand">
          <Link href="/">
            JOBSHEET PRAKTIKUM
          </Link>
        </div>
        
        <div className="nav-links">
          <Link href="/" className="nav-link">
            Beranda
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/profile" className="nav-link">
            Profile
          </Link>
          <Link href="/setting/user" className="nav-link">
            Setting User
          </Link>
          <Link href="/setting/app" className="nav-link">
            Setting App
          </Link>
          <Link href="/produk" className="nav-link">
            Produk
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
