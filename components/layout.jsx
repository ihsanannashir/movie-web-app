import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'
import Image from 'next/image'

export default function Layout({children, pageTitle, content}) {
  const titleDesc = ' - Movie Web App'
  const mainLayout = "https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
  const bgLy = mainLayout ? mainLayout : 'bg-dark-5'

  return (
    <>
    <Head className=''>
        <title>{pageTitle+titleDesc}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/icon.png" />
    </Head>
    <Navbar Title={pageTitle}/>
    <main className="py-16 px-4 md:py-20 md:px-7 bg-dark-5">{children}</main>
    <Footer />
    </>
  )
}