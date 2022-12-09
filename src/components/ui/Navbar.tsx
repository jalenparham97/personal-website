import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { navLinks } from '@/utils/navLinks';
import {
  IconChevronDown,
  IconMoonStars,
  IconSunHigh,
  IconX,
} from '@tabler/icons';

interface NavLinkProps {
  href?: string;
  children?: React.ReactNode;
  [x: string]: any;
}

function NavLink({ href, children, ...otherProps }: NavLinkProps) {
  const router = useRouter();

  const activeLinkClass =
    router.pathname === href ? 'text-teal-500' : 'text-white';

  return (
    <Link
      href={href}
      className={clsx(
        'text-base font-semibold hover:text-teal-500 duration-150',
        activeLinkClass
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let isSystemDarkMode = darkModeMediaQuery.matches;
    let isDarkMode = document.documentElement.classList.toggle('dark');

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="ggroup rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-900/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <IconMoonStars className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <IconSunHigh className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  );
}

export function Navbar() {
  return (
    <div className="sticky top-0 w-full z-10 border-b border-zinc-800">
      <Popover className="relative bg-zinc-900">
        <div
          className="pointer-events-none absolute inset-0 z-10"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 w-full">
            <div>
              <Link href="/" className="flex items-center">
                <h3 className="text-2xl text-white tracking-widest font-semibold">
                  <span className="text-teal-500">J</span>P
                </h3>
              </Link>
            </div>
            <div className="md:hidden flex space-x-4">
              <Popover.Button className="group flex items-center rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                Menu
                <IconChevronDown className="ml-3 h-auto w-4 stroke-zinc-500 group-hover:stroke-zinc-400 dark:group-hover:stroke-zinc-400" />
              </Popover.Button>
              <ModeToggle />
            </div>
            <div className="hidden md:flex md:items-center md:justify-between">
              <div className="flex items-center md:ml-12 space-x-6">
                {navLinks.map((link) => (
                  <NavLink key={link.name} href={link.to}>
                    {link.name}
                  </NavLink>
                ))}
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>

        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 md:hidden"
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                  <IconX className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                </Popover.Button>
                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Navigation
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Popover.Button
                        as={Link}
                        href={link.to}
                        className="block py-2"
                      >
                        {link.name}
                      </Popover.Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    </div>
  );
}
