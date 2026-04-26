import Navbar from '../Navbar'

export default function AppShell({ children }) {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <footer className="footer">
        <div className="container footerInner">
          <strong>Week 4 Praktikum</strong>
          <span>Link, catch-all routing, and global layout</span>
        </div>
      </footer>
    </>
  )
}