import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section>
       <h1>Home Page</h1>
       <Link href="/ben">
        All ben list
       </Link>
    </section>
  )
}
