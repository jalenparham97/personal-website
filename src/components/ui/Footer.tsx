import Link from 'next/link';
import { navLinks } from '@/utils/navLinks';
import Image from 'next/image';
import GithubIcon from '@/images/github-icon.svg';
import FacebookIcon from '@/images/facebook-icon.svg';
import LinkedinIcon from '@/images/linkedin-icon.svg';

const socialLinks = [
  {
    to: 'https://www.facebook.com/Saginaw-STEM-108737604695322',
    alt: 'icon',
    icon: FacebookIcon,
  },
  {
    to: 'https://www.instagram.com/saginawstem/',
    alt: 'icon',
    icon: LinkedinIcon,
  },
  {
    to: 'https://www.linkedin.com/in/saginaw-stem-47880820b',
    alt: 'icon',
    icon: GithubIcon,
  },
];

export function Footer() {
  return (
    <footer className=" bg-zinc-900">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl text-white tracking-widest font-semibold text-center">
          <span className="text-teal-500">J</span>P
        </h3>
        <div className="text-zinc-200 text-center max-w-md mx-auto mt-6 text-2xl">
          Living, learning, and leveling up one day at a time.
        </div>
        <nav className="mt-6 flex flex-wrap justify-center" aria-label="Footer">
          {navLinks.map((link) => (
            <div key={link.name} className="px-5 py-2 md:px-2">
              <Link
                href={link.to}
                className="text-base text-zinc-200 hover:text-teal-500 font-semibold duration-150"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-4">
          {socialLinks.map((link, i) => (
            <a href={link.to} key={i} target="_blank" rel="noopener noreferrer">
              <Image
                src={link.icon}
                alt={link.alt}
                className="w-9 hover:scale-110 duration-150"
                width={100}
                height={100}
              />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-zinc-200">
          Jalen Parham &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
