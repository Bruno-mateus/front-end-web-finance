
import type { AppProps } from 'next/app'
import { Header } from '../compnents/Header'
import { UserContextProvider } from '../contexts/UserContext'
import { globalStyles } from '../styles/globalStyles'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <UserContextProvider>
        <Header/>
        <Component {...pageProps} />
  </UserContextProvider>

  )
    }
