import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Web App',
  description: 'A Movies Catalog from TMBD',
}

//bg-[#1C1B33]
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
