import { AppProps } from 'next/app';
import Head from 'next/head';
import '#/styles/reset.css';
import '#/styles/globals.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';

import apiClient from '#/lib/apiClient';
import Modal from '#/components/Modal';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.query.code == null) {
      return;
    }

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
      <RecoilRoot>
        <Component {...pageProps} />
        <Modal />
      </RecoilRoot>
    </>
  );
}

export default App;
