import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { projectSchema } from './schemas/project.schema';
import { aboutSchema } from './schemas/about.schema';
import { definePagePlugin, myStructure } from './plugins';

export const apiVersion = '2022-12-04';

export const studioConfig = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  basePath: '/admin',
  title: 'Personal Website Admin',
  apiVersion,
  schema: {
    types: [projectSchema, aboutSchema],
  },
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool({
      defaultApiVersion: apiVersion,
    }),
    media(),
    // definePagePlugin({ type: aboutSchema.name }),
  ],
});
