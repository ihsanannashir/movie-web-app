import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Custom404() {
    return <>
    <Head className=''>
        <title>Page Not Found</title>
        <meta name="description" content='404 - Page Not Found' />
        <link rel="icon" href="/icon.png" />
    </Head>
    <div className="fixed top-0"><Navbar Title="Page Not Found"/></div>
    <main className="h-screen bg-dark-5">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-xl md:text-4xl font-bold">We've lost this page</div>
          <div className="text-xs md:text-base font-medium">Sorry, the page you are looking for doesn't exist or has been moved.</div>
          <Link href={'/'} className="bg-dark-2 hover:bg-dark-1 text-xs md:text-base px-4 py-2 font-semibold rounded-lg">Back to Home</Link>
        </div>
      </div>
    </main>
    <div className="fixed bottom-0 w-screen"><Footer /></div>
    </>
  }