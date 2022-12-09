import Image from 'next/image';
import React from 'react';
import { Project } from '@/types';
import { urlForImage } from '@/lib/sanity/helpers';
import { Button } from './ui/Button';
import { IconExternalLink } from '@tabler/icons';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <div
      className="lg:flex items-center p-7 bg-zinc-100 dark:bg-zinc-800 shadow-md lg:space-x-10 rounded-md"
      key={project._id}
    >
      <Image
        src={urlForImage(project.image).url()}
        alt=""
        width={1000}
        height={1000}
        className="w-full md:h-[400px] lg:h-[300px] rounded-md"
      />

      <div className="w-full mt-8 lg:mt-0">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          {project.title}
        </h2>
        <p className="text-lg leading-normal mt-5 dark:text-zinc-200">
          {project.description}
        </p>
        <Button
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="!px-10 !py-3 !text-lg mt-7"
          leftIcon={<IconExternalLink size={22} />}
        >
          Visit website
        </Button>
      </div>
    </div>
  );
}
