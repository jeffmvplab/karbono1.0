import '@/styles/globals.css'
import { lightThemes } from '@/themes'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

  export default function MyApp({ Component, pageProps, }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  
return <>
  {
  getLayout(
    <ThemeProvider theme={lightThemes}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
</>


// return (
// <Provider store={store}>

// {
//   getLayout(
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Component {...pageProps} />
//     </ThemeProvider>
//   )
// }
// </Provider>)

}



