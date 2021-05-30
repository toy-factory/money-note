import { AppProps } from 'next/app';
import Head from 'next/head';
import '#/styles/reset.css';
import '#/styles/globals.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import apiClient from '#/lib/apiClient';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    apiClient.get('/oauth2/kakao', {
      params: {
        kakao_code: router.query.code,
      },
    });
  }, [router.query.code]);

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
