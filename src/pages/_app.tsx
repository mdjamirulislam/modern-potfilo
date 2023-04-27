import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../Components/Navv/Navbar"
import Lastfooter from "../Components/lastfooter/Lastfooter"
import { ThemeProvider } from 'next-themes'
export default function App({ Component, pageProps }: AppProps) {
  return (
      
      <ThemeProvider enableSystem={true} attribute='class'>
        <div>
        <main className='w-[1200px] mx-auto'>
        <Navbar/>
        <Component {...pageProps} />
        
      </main>
        <Lastfooter/>
      </div>
      </ThemeProvider>
  )
}
