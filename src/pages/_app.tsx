import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Navbar />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
