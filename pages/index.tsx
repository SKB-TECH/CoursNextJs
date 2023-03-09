import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section>
      <Navbar />
       <h1>Home Page</h1>
       <Footer />
    </section>
  )
}
