import { defineType, defineField } from 'sanity';

export const projectSchema = defineType({
  name: 'project',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The website name or title.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      description: 'The description of what the website is about.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'url',
      name: 'link',
      title: 'Link',
      description: 'The link to the website.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
      description: 'The websites homepage image.',
      options: {
        hotspot: true,
      },
    }),
  ],
});
