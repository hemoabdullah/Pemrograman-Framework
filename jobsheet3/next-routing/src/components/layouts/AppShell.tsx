import { ReactNode } from 'react'
import Navbar from './Navbar'

interface AppShellProps {
  children: ReactNode
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div>
      <Navbar />
      
      <main>
        {children}
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 JOBSHEET PRAKTIKUM - Pemrograman Framework</p>
          <p style={{ marginTop: '8px', fontSize: '14px', opacity: 0.8 }}>
            Next.js Pages Router Tutorial
          </p>
        </div>
      </footer>
    </div>
  )
}

export default AppShell
