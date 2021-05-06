import { AppProps } from 'next/app';
import Head from 'next/head';
import '#/styles/reset.css';
import '#/styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Money Note</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
