import Head from 'next/head'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index" />
    </>
  )
}