import { GetStaticProps } from 'next';
import { projectsQuery } from '@/lib/sanity/queries/project.queries';
import { getClient } from '@/lib/sanity/sanity.server';
import { Project } from '@/types';
import { PageLayout } from '@/components/layouts/PageLayout';
import { ProjectCard } from '@/components/ProjectCard';

interface Props {
  projects: Project[];
}

export default function PortfolioPage({ projects }: Props) {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="uppercase text-3xl font-bold lg:text-4xl text-center text-zinc-900 dark:text-white">
          My <span className="text-teal-500">Portfolio</span>
        </h2>

        <p className="text-zinc-900 dark:text-white text-center mt-5 text-xl !leading-loose md:text-2xl max-w-4xl mx-auto">
          I am inspired by creating great work with people who are as passionate
          as I am about building something awesome.
        </p>

        <div className="mt-16 space-y-10">
          {projects?.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const projects: Project[] = await getClient(preview).fetch(projectsQuery);

  return {
    props: {
      projects,
    },
  };
};
