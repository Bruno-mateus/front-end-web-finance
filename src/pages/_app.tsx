
import type { AppProps } from 'next/app'
import { Header } from '../compnents/Header'
import { globalStyles } from '../styles/globalStyles'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <>
        <Header/>
        <Component {...pageProps} />
  </>

  )
    }
