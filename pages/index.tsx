import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



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
