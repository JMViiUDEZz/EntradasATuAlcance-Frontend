import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, nightTheme } from '../themes';
import { SWRConfig } from 'swr';
import { AuthProvider } from '../context';
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 500,
        fetcher: (resource, init ) => fetch(resource, init ).then( res => res.json ())
      }}
    >
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
          <ThemeProvider theme={ lightTheme } >
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
      
    </SWRConfig>
    
  )
}