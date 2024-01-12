import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LGUD',
  description: 'Department of Local Government and Urban Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[url('../assets/bg.png')]">
      <body className={inter.className}>
        <main className="max-w-6xl mx-auto">
          <Navbar/>
            {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
