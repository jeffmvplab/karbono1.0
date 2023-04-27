import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export const GA_TRACKING_ID = 'G-3YC6MN9379'

export const GTM_TRACKING_ID = 'GTM-PV5TRWW'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
        
        <Script
        id="GA_GTM"
        type="text/javascript"
        src="../scripts/gtm_ga.js"
        strategy="afterInteractive"
      // strategy="afterInteractive"
      />
         {/* <script>(
          function(w,d,s,l,i){w[l] = w[l] || [];w[l].push(
            {'gtm.start':new Date().getTime(),event:'gtm.js'}
            );var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PV5TRWW');
         </script>  */}

      </Head>
      <body>
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_TRACKING_ID}`}
          height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
