import Head from 'next/head'

import LoginView from '../../src/views/auth/Login'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginView />
    </>
  )
}