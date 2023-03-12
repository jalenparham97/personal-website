import { PageLayout } from '@/components/layouts/PageLayout';
import { IconArrowRight } from '@tabler/icons';
import Link from 'next/link';

export default function ThanksPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-5 py-20">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
          <div className="my-auto flex-shrink-0 py-16 sm:py-32">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Thank you!
            </h1>
            <p className="mt-4 text-2xl dark:text-zinc-300">
              We have received your submission.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="text-xl font-medium text-teal-500 flex items-center hover:underline underline-offset-4 decoration-2 decoration-dotted"
              >
                Go back home
                <IconArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
