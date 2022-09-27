import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Data Science Courses Certification Training India"
        />
        <meta name="language" content="English" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="Daily" />
        <meta name="author" content="Learnbay" />
        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="expires" content="never" />
        <meta name="coverage" content="Worldwide" />
        <meta name="robots" content="ALL"></meta>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
                  "@context": "https://schema.org/", 
                  "@type": "Product", 
                  "name": "Data Science Course in Bangalore | Data Science Course Training In Bangalore - Learnbay",
                  "brand": {
                  "@type": "Brand",
                  "name": "Learnbay"
                  },
                  "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "bestRating": "5",
                  "worstRating": "1",
                  "ratingCount": "12657"
                  }
                 } `,
          }}
        />

        <Script
          strategy="lazyOnload"
          src="https://www.googleoptimize.com/optimize.js?id=OPT-NQHBZ7H"
        ></Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({‘gtm.start’:new Date().getTime(),event:‘gtm.js’});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),
            dl=l!=‘dataLayer’?‘&l=‘+l:‘’;
            j.async=true;
            j.src=’https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })
          (window,document,‘script’,‘dataLayer’,‘GTM-NN8XWH8’);
      `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=‘2.0’;
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,‘script’,
            ‘https://connect.facebook.net/en_US/fbevents.js’);
            fbq(‘init’, ‘443494164298902’);
            fbq(‘track’, ‘PageView’);
            `,
          }}
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NN8XWH8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=443494164298902&ev=PageView&noscript=1"
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
