import Head from 'next/head'
import Image from 'next/image'
import { About, Experience, Main, Navbar, Contact, Skills } from 'components'

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Guhan | Front-end developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Experience />
      <Contact />

    </div>
  )
}
