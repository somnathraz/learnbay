import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global"/>
        <meta name="copyright" content="Learnbay: Data Science Courses Certification Training India"/>
        <meta name="language" content="English"/>
        <meta name="rating" content="general"/>
        <meta name="revisit-after" content="Daily"/>
        <meta name="author" content="Learnbay"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name="bingbot" content="index,follow"/>
        <meta name="expires" content="never"/>
        <meta name="coverage" content="Worldwide"/>
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
              __html: JSON.stringify(
                `application/ld+json"> {
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
                 } `
              ),
            }}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
