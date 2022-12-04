import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { TextInput } from '@/components/ui/TextInput';
import MeImage from '@/images/me.jpg';
import WebDesignImage from '@/images/design-icon.svg';
import WebDevelopmentImage from '@/images/web-icon.svg';
import ContentImage from '@/images/content-icon.svg';
import { Textarea } from '@/components/ui/Textarea';
import { IconArrowRight, IconExternalLink, IconSend } from '@tabler/icons';

const services = [
  {
    name: 'Web Design',
    description:
      'My designs are beautiful and made to deliver compelling sites, and intuitive user interfaces.',
    icon: WebDesignImage as StaticImageData,
  },
  {
    name: 'Web Development',
    description:
      'I love bringing ideas to life in the browser with impactfull and stunning user experiances.',
    icon: WebDevelopmentImage as StaticImageData,
  },
  {
    name: 'Content Management',
    description:
      'One place to store, create, update, and manage all of your high quality content for your users.',
    icon: ContentImage as StaticImageData,
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="">
        <header className="flex flex-col justify-center h-[92vh] bg-[url('/images/hero-background-light.svg')] dark:bg-[url('/images/hero-background-dark.svg')] bg-cover bg-no-repeat w-full">
          <div className="max-w-7xl mx-auto px-5">
            <div className="uppercase">
              <h1 className="text-2xl font-bold lg:text-5xl text-zinc-900 dark:text-white tracking-wider !leading-snug">
                I&apos;m <span className="text-teal-500">Jalen Parham</span>.
              </h1>
              <h1 className="text-2xl font-bold lg:text-5xl text-zinc-900 dark:text-white tracking-wider !leading-snug">
                Sofware Developer and part time freelancer.
              </h1>
            </div>
            <p className="text-zinc-600 dark:text-zinc-100 tracking-wider !leading-normal max-w-5xl mt-8 text-xl lg:text-3xl">
              I&apos;m a software developer specializing in building and
              designing exceptional digital web experiences. Currently, I’m
              focused on building accessible, user-friendly products at{' '}
              <Link
                href="http://nexient.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline underline-offset-4 decoration-2 decoration-dotted"
              >
                Nexient
              </Link>
              .
            </p>
            <div className="mt-10">
              <Button
                href="/portfolio"
                color="teal"
                className="!px-10 !py-3 !text-lg"
                rightIcon={<IconArrowRight />}
              >
                View my work
              </Button>
            </div>
          </div>
        </header>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-20 lg:py-40">
        <h2 className="uppercase text-3xl font-bold lg:text-4xl text-center text-zinc-900 dark:text-white">
          About <span className="text-teal-500">Me</span>
        </h2>

        <div className="lg:flex justify-between items-center mt-10 lg:space-x-10 text-center lg:text-left">
          <Image
            src={MeImage}
            alt="A picture of Jalen Parham"
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full mx-auto lg:mx-0"
          />
          <div className="lg:max-w-[600px] mt-12 lg:mt-0">
            <h3 className="dark:text-white text-3xl font-semibold">
              Hi, I&apos;m Jalen. Nice to meet you.
            </h3>
            <p className="dark:text-zinc-300 text-xl mt-7 leading-loose">
              I am currently a Web Developer at{' '}
              <Link
                href="https://nexient.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline underline-offset-4 decoration-2 decoration-dotted"
              >
                Nexient
              </Link>{' '}
              in Ann Arbor, MI. I have a passion for creating beautiful,
              intuitive, and dynamic websites and applications with stunning,
              yet functional user experiances.
            </p>
            <div className="mt-10">
              <Button
                href="/portfolio"
                className="!px-10 !py-3 !text-lg"
                rightIcon={<IconArrowRight />}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto px-5 py-20 lg:py-40">
          <div className="text-center">
            <h2 className="uppercase text-3xl font-bold lg:text-4xl text-white">
              My <span className="text-teal-500">Services</span>
            </h2>

            <p className="text-zinc-200 text-2xl mt-5">
              Services I offer to my freelance clients
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mt-14">
            {services.map((service) => (
              <div
                key={service.name}
                className="p-8 bg-zinc-800 rounded-md shadow-md text-center dark:bg-zinc-900"
              >
                <Image src={service.icon} className="w-20 mx-auto" alt="" />
                <h3 className="text-2xl font-semibold mt-2 text-white">
                  {service.name}
                </h3>
                <p className="text-lg mt-2 text-zinc-200">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-20 lg:py-40">
        <h2 className="uppercase text-3xl font-bold lg:text-4xl text-center text-zinc-900 dark:text-white">
          My <span className="text-teal-500">Portfolio</span>
        </h2>

        <div className="mt-16">
          <div className="lg:flex items-center p-7 lg:p-10 bg-zinc-100 dark:bg-zinc-800 shadow-md lg:space-x-10 rounded-md">
            <Image
              src="https://images.prismic.io/jalenparham/e29074bf-34f0-4c51-97be-b09186b6b527_Screen+Shot+2021-01-28+at+4.00.10+PM.png?auto=compress,format&rect=0,1,2352,1291&w=3322&h=1824"
              alt=""
              width={1000}
              height={1000}
              className="w-full md:h-[400px] lg:h-[300px] rounded-md"
            />

            <div className="w-full mt-8 lg:mt-0">
              <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
                Beyond Us Firearms Academy
              </h2>
              <p className="text-lg leading-normal mt-5 dark:text-zinc-200">
                Beyond Us Firearms Academy gives class leading firearms training
                and safety instruction in the metro Detroit, and Tri-state areas
                in Michigan.
              </p>
              <Button
                href="/portfolio"
                className="!px-10 !py-3 !text-lg mt-7"
                leftIcon={<IconExternalLink size={22} />}
              >
                Visit website
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-200 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto px-5 py-20 lg:py-40">
          <h2 className="uppercase text-3xl font-bold lg:text-4xl text-center text-zinc-900 dark:text-white">
            Contact <span className="text-teal-500">Me</span>
          </h2>

          <div className="mt-16 flex lg:space-x-20 flex-col-reverse lg:flex-row">
            <form className="w-full mt-20 lg:mt-0">
              <TextInput label="Name" />
              <TextInput
                label="Email"
                type="email"
                classNames={{ root: 'mt-4' }}
              />
              <Textarea label="Message" classNames={{ root: 'mt-4' }} />
              <Button
                className="!px-10 !py-3 !text-lg mt-7"
                leftIcon={<IconSend size={22} />}
              >
                Submit
              </Button>
            </form>

            <div className="w-full text-center lg:text-left">
              <h2 className="text-3xl font-semibold dark:text-white text-zinc-900">
                Let&apos;s work together
              </h2>
              <p className="text-xl leading-loose mt-5 text-zinc-700 dark:text-zinc-200">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be a
                part of.
              </p>
              <p className="text-xl mt-5 text-zinc-900 dark:text-white">
                <span className="font-semibold">Email</span>:{' '}
                <Link
                  href="mailto:jalenparham97@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:underline underline-offset-4 decoration-2 decoration-dotted"
                >
                  jalenparham97@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
