import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({children, pageTitle, content}) {
  return (
    <>
    <Head className=''>
        <title>{pageTitle} - Movie Web App</title>
        <meta name="description" content={content} />
        {/* <link rel="icon" href="/Logo/favicon.png" /> */}
    </Head>
    <Navbar Title={pageTitle}/>
    <main className='py-16 px-4 md:py-20 md:px-7 bg-dark-5'>{children}</main>
    </>
  )
}