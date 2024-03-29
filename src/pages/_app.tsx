import '../styles/globals.css';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <script
          async
          src={`https://www.google.com/recaptcha/api.js?render=6LegkBolAAAAAEheE1xJs7wPYOpV40ab8zbyGWfc`}
        ></script>
      </Head>

      <main className={inter.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </div>
  );
}
