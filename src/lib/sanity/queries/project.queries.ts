import groq from 'groq';

export const projectsHomePageQuery = groq`
*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  description,
  link,
  image,
}[0...2]`;

export const projectsQuery = groq`
*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  description,
  link,
  image,
}`;
