import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../Components/Navv/Navbar"

export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className='w-[1200px] mx-auto'>
        <Navbar/>
        <Component {...pageProps} />
      </main>
  )
}
