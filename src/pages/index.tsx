import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "../Components/homelayout/Layout"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern portfilo</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
              <div>
                {/* home layout */}
                 <Layout/>
                
                 


              </div>
    </>
  )
}
