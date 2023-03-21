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

declare global {
  interface Window {
    captchaOnLoad: () => void;
    grecaptcha: ReCaptchaInstance;
  }
}

interface ReCaptchaInstance {
  ready: (cb: () => any) => any;
  execute: (key: string, options: ReCaptchaExecuteOptions) => Promise<string>;
  render: (id: string, options: ReCaptchaRenderOptions) => any;
}

interface ReCaptchaExecuteOptions {
  action: string;
}

interface ReCaptchaRenderOptions {
  sitekey: string;
  size: 'invisible';
}
