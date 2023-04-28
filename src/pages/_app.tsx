import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} h-screen w-screen`}>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export function NavBar()
{
  return (
    <>
      <div className='h-12 w-screen p-3 fixed bg-yellow-800 flex flex-row justify-between content-center'>
        <div>
          <a href="/">LOGO</a>
        </div>
        <div className='flex flex-row gap-6'>
          <div>
            <a href="/templates">Templates</a>
          </div>
          <div>
            <a href="/create">Create +</a>
          </div>
        </div>
      </div>
    </>
  )



}