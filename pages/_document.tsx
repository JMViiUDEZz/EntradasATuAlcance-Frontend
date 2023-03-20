// import React from 'react';

import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* <title>Librería Picasso</title> */}
        <link
           rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//     static async getInitialProps(ctx: DocumentContext) {
//         const initalProps = await Document.getInitialProps(ctx)

//         return initalProps
//     }

//     render() {
//         return (
//             <Html>
//                 <Head>
//                     <link
//                         rel="stylesheet"
//                         href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
//                     />
//                 </Head>
//                 <body>
//                     <Main />
//                     <NextScript />
//                 </body>
//             </Html>
//         )
//     }
// }

// export default MyDocument;