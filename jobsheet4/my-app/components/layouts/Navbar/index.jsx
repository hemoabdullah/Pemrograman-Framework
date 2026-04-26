import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarInner">
        <Link className="brand" href="/">
          Week 4
        </Link>

        <div className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/category/tech/javascript">Category</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
          <Link href="/product">Product</Link>
        </div>
      </div>
    </nav>
  )
}