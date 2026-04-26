import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbarInner">
        <strong>Week 6</strong>
        <nav className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Trigger 404</Link>
        </nav>
      </div>
    </header>
  )
}