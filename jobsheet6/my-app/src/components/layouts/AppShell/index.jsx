import { useRouter } from 'next/router'

import Navbar from '../Navbar'

const disableNavbar = ['/404']

export default function AppShell({ children }) {
  const router = useRouter()

  return (
    <>
      {!disableNavbar.includes(router.pathname) && <Navbar />}
      <main className="container">{children}</main>
      <footer className="footer">
        <div className="container footerInner">
          <strong>Week 6 Praktikum</strong>
          <span>Custom Document dan Custom Error Page</span>
        </div>
      </footer>
    </>
  )
}