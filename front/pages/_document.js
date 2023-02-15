import { Html, Head, Main, NextScript } from 'next/document'
import { poppins } from '../constants/fonts'

export default function Document() {
  return (
    <Html lang="en" className={poppins.className}>
      <Head />
      <body className='text-basic-blue'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
