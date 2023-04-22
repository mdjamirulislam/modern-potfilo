import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../Components/Navv/Navbar"
import Lastfooter from "../Components/lastfooter/Lastfooter"

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
        <main className='w-[1200px] mx-auto'>
        <Navbar/>
        <Component {...pageProps} />
        
      </main>
        <Lastfooter/>
      </div>
  )
}
