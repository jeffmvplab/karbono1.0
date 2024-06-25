
import { Html, Head, Main, NextScript } from 'next/document'

export const GA_TRACKING_ID = 'G-3YC6MN9379'

export const GTM_TRACKING_ID = 'GTM-PV5TRWW'

export default function Document() {

  //   const fontLink = (fontType: string) => {
  //     return <link
  //         rel="preload"
  //         href={`/fonts/CCBGradual/CCBGradual-${fontType}.woff2`}
  //         as="font"
  //         type="font/woff2"
  //         crossOrigin="anonymous"
  //     />
  // }

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* <link rel="shortcut icon" href="/icono.ico" /> */}
        {/* 
                {fontLink('Thin')}
                {fontLink('Light')}
                {fontLink('Medium')}
                {fontLink('Regular')}
                {fontLink('Bold')}
                {fontLink('Black')}
                {fontLink('ExtraBold')} */}

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `<!-- Google Tag Manager -->
                    <script>
                      (function(w,d,s,l,i) {
                        w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer',${GTM_TRACKING_ID});
                    </script>
                    <!-- End Google Tag Manager -->
                    `,
          }}/>

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>

        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', { 'optimize_id': '${process.env.NEXT_PUBLIC_OPTIMIZE_ID}' });
                    `,
          }} /> */}

      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_TRACKING_ID}`}
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript> */}
        {/* End Google Tag Manager (noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

