import { NextSeo } from 'next-seo';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';

type SEO = {
  title: string;
  description: string;
  canonicalUrl: string;
  image?: string;
  siteName?: string;
};

const defaultSeo: SEO = {
  title: 'Jalen Parham',
  description: 'Software Developer and part time freelancer.',
  canonicalUrl: 'https://jalenparham.com',
  image: '',
  siteName: 'Jalen Parham',
};

interface Props {
  seo?: SEO;
  children: React.ReactNode;
}

export function PageLayout({ children, seo = defaultSeo }: Props) {
  return (
    <div>
      <NextSeo
        title={seo.title}
        description={seo.description}
        canonical={seo.canonicalUrl}
        openGraph={{
          url: seo.canonicalUrl,
          title: seo.title,
          description: seo.description,
          images: [
            {
              url: seo.image,
            },
          ],
          site_name: seo.siteName,
        }}
      />

      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
