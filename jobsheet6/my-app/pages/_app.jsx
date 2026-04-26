import '../styles/globals.css'

import AppShell from '../src/components/layouts/AppShell'

export default function MyApp({ Component, pageProps }) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  )
}