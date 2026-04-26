import Head from 'next/head'

import RegisterView from '../../src/views/auth/Register'

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterView />
    </>
  )
}