import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type Project = {
  _id: string;
  title: string;
  description: string;
  link: string;
  image: SanityImageSource;
};

export type AboutPage = {
  _id: string;
  seoTitle: string;
  pageTitle: string;
  aboutIntroTitle: string;
  aboutDescription: string;
};
