
// import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, nightTheme } from '../themes';
import { SWRConfig } from 'swr';
import { AuthProvider } from '../context';
import { CategoryProvider } from '@/context/categories';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 500,
        fetcher: (resource, init ) => fetch(resource, init ).then( res => res.json ())
      }}
    >
      <AuthProvider>
      <CategoryProvider>
          <ThemeProvider theme={ lightTheme } >
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CategoryProvider>
      </AuthProvider>
      
    </SWRConfig>
    
  )
}

// import '../styles/globals.css';
// import type { AppProps } from 'next/app';
// import { SessionProvider } from 'next-auth/react'
// // import { PayPalScriptProvider } from '@paypal/react-paypal-js';


// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { SWRConfig } from 'swr';

// import { lightTheme } from '../themes';
// import { AuthProvider, 
//   // CartProvider,
//    UiProvider } from '../context';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <SessionProvider>
//       {/* <PayPalScriptProvider options={{ 'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '' }}> */}

      
//         <SWRConfig 
//           value={{
//             fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
//           }}
//         >
//           <AuthProvider>
//             {/* <CartProvider> */}
//               <UiProvider>
//                 <ThemeProvider theme={ lightTheme}>
//                     <CssBaseline />
//                     <Component {...pageProps} />
//                 </ThemeProvider>
//               </UiProvider>
//             {/* </CartProvider> */}
//           </AuthProvider>
//         </SWRConfig>

//       {/* </PayPalScriptProvider> */}
//     </SessionProvider>
//   )
// }

// export default MyApp