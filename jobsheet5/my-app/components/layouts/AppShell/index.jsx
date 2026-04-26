import { useRouter } from 'next/router'

import Navbar from '../Navbar'

const disableNavbar = ['/auth/login', '/auth/register']

export default function AppShell({ children }) {
  const router = useRouter()

  return (
    <>
      {!disableNavbar.includes(router.pathname) && <Navbar />}

      <main className="container">{children}</main>

      <footer className="footer">
        <div className="container footerInner">
          <strong>Week 5 Praktikum Styling</strong>
          <span>Global CSS, Module, SCSS, Inline, Tailwind</span>
        </div>
      </footer>
    </>
  )
}