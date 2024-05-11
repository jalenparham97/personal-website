import Link from 'next/link';
import { PageLayout } from '@/components/layouts/PageLayout';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Textarea';
import { TextInput } from '@/components/ui/TextInput';
import { IconSend } from '@tabler/icons';
import { useEffect } from 'react';
import { env } from '@/env';

export default function ContactPage() {
  useEffect(() => {
    window?.grecaptcha?.ready(function () {
      window?.grecaptcha
        ?.execute(env.NEXT_PUBLIC_RECAPTCHA_CLIENT_SECRET, {
          action: 'contactpage_submit',
        })
        .then(function (token: string) {
          const gcaptchaInput = document.getElementById(
            'captchaResponse'
          ) as HTMLInputElement;
          gcaptchaInput.value = token;
        });
    });
  }, []);

  return (
    <PageLayout
      seo={{
        title: 'Contact - Jalen Parham',
        description: 'Dont be a stranger, just say hello.',
        canonicalUrl: 'https://jalenparham.com/contact',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div>
          <h2 className="uppercase text-3xl font-bold lg:text-4xl text-center text-zinc-900 dark:text-white">
            Contact <span className="text-teal-500">Me</span>
          </h2>

          <div className="mt-7">
            <h3 className="text-zinc-900 dark:text-white text-2xl md:text-3xl font-bold text-center">
              Dont be a stranger, Just say hello
            </h3>
            <p className="text-zinc-900 dark:text-white text-center mt-4 text-xl !leading-loose md:text-2xl max-w-4xl mx-auto">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be a part of.
            </p>
            <div className="text-center mt-7">
              <Link
                href="mailto:jalenparham97@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline underline-offset-4 decoration-2 decoration-dotted text-2xl"
              >
                jalenparham97@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-zinc-900 dark:text-white text-2xl md:text-3xl font-bold text-center">
            Let&apos;s Get In Touch
          </h3>
          <form
            action={process.env.NEXT_PUBLIC_FORMBOX_URL}
            encType="multipart/form-data"
            className="w-full mt-10"
            id="contact-form"
            method="post"
          >
            <TextInput
              label="Name"
              name="name"
              autoComplete="full_name"
              classNames={{ input: 'dark:bg-zinc-800' }}
              required
            />
            <TextInput
              label="Email"
              type="email"
              name="email"
              required
              classNames={{ root: 'mt-4', input: 'dark:bg-zinc-800' }}
            />
            <Textarea
              label="Message"
              name="message"
              required
              classNames={{ root: 'mt-4', input: 'dark:bg-zinc-800' }}
            />
            <input
              type="hidden"
              id="captchaResponse"
              name="g-recaptcha-response"
            />
            <input type="hidden" name="_gotcha" />
            <div className="mt-7">
              <Button
                type="submit"
                className="!px-10 !py-3 !text-lg"
                leftIcon={<IconSend size={22} />}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
