import { defineField, defineType } from 'sanity';

export const aboutSchema = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'aboutSection',
      title: 'About Section',
    },
    {
      name: 'skillsSection',
      title: 'Skills Section',
    },
  ],
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoImage',
      title: 'Image',
      type: 'image',
      group: 'seo',
    }),

    defineField({
      name: 'aboutIntroTitle',
      title: 'About Intro Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'aboutSection',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'aboutSection',
    }),
    // defineField({
    //   name: 'content',
    //   title: 'Content',
    //   type: 'array',
    //   of: [{ type: 'block' }],
    // }),
  ],
});
