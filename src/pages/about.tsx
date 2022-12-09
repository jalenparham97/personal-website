import Image from 'next/image';
import { GetStaticProps } from 'next';
import { getClient } from '@/lib/sanity/sanity.server';
import { AboutPage as AboutPageType } from '@/types';
import AboutMeImage from '../images/about-me.svg';
import { PageLayout } from '@/components/layouts/PageLayout';
import { aboutPageQuery } from '@/lib/sanity/queries/about.queries';

export const skills = [
  {
    name: 'React',
    icon: '/images/react.svg',
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    name: 'Next Js',
    icon: '/images/next.svg',
    description:
      'An open-source React front-end development web framework for build server-side rendering and static web applications.',
  },
  {
    name: 'Tailwindcss',
    icon: '/images/tailwindcss-dark.svg',
    iconDark: '',
    description:
      'A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).',
  },
  {
    name: 'Typescript',
    icon: '/images/typescript.svg',
    description:
      'TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.',
  },
  {
    name: 'Vue',
    icon: '/images/vue.svg',
    description: 'A progressive framework for building user interfaces.',
  },
  {
    name: 'Nest',
    icon: '/images/nest.svg',
    description:
      'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
  },
  {
    name: 'Javascript',
    icon: '/images/javascript.png',
    description:
      'A scripting or programming language that allows you to implement complex features on web pages.',
  },
  {
    name: 'Jest',
    icon: '/images/jest.svg',
    description:
      'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
  },
  {
    name: 'HTML5',
    icon: '/images/html.svg',
    description:
      'The latest evolution of the standard that defines HTML (Hypertext Markup Language).',
  },
  {
    name: 'Nodejs',
    icon: '/images/node.svg',
    description: `A JavaScript runtime built on Chrome's V8 JavaScript engine.`,
  },
  {
    name: 'MongoDB',
    icon: '/images/mongodb.svg',
    description:
      'MongoDB is a document database with the scalability and flexibility.',
  },
  {
    name: 'Firebase',
    icon: '/images/firebase.svg',
    description:
      'Firebase is a platform developed by Google for creating mobile and web applications.',
  },
];

interface Props {
  aboutPage: AboutPageType;
}

export default function AboutPage({ aboutPage }: Props) {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div>
          <h2 className="uppercase text-3xl font-bold lg:text-4xl text-center text-zinc-900 dark:text-white">
            About <span className="text-teal-500">Me</span>
          </h2>

          <div className="lg:flex justify-between items-center mt-16 lg:space-x-10">
            <Image
              src={AboutMeImage}
              alt="A picture of Jalen Parham"
              className="md:max-w-[550px] h-[400px] mx-auto lg:mx-0"
            />
            <div className="md:max-w-[600px] mt-12 lg:mt-0 md:mx-auto">
              <h4 className="text-teal-500 text-xl font-semibold">Who am I</h4>
              <h2 className="text-zinc-900 dark:text-white text-2xl md:text-3xl font-bold mt-5 leading-normal">
                {aboutPage.aboutIntroTitle}
              </h2>
              <p className="text-zinc-900 dark:text-white mt-5 text-lg leading-loose">
                {aboutPage.aboutDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="py-20 lg:py-40">
          <h2 className="uppercase text-3xl font-bold lg:text-4xl text-center text-zinc-900 dark:text-white">
            Technologies I <span className="text-teal-500">work with</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-zinc-100 dark:bg-zinc-800 shadow-md p-7 rounded-md"
              >
                <Image
                  className="w-[150px] h-[100px] mx-auto"
                  src={skill.icon}
                  alt=""
                  width={100}
                  height={100}
                />

                <div className="mt-4 space-y-2 text-zinc-900 dark:text-white text-center">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>

                  <p className="">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const page = await getClient(preview).fetch<AboutPageType[]>(aboutPageQuery);

  return {
    props: {
      aboutPage: page[0],
    },
  };
};
