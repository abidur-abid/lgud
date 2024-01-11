import Gif from '@/components/Gif'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Gif/>
    </>
  )
}
