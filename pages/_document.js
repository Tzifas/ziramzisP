import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/brand/mark.jpg" type="image/jpeg" />
      </Head>
      <body className="bg-dark text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
