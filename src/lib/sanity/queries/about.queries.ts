import groq from 'groq';

export const aboutPageQuery = groq`*[_type == "aboutPage"] {
  _id,
  seoTitle,
  pageTitle,
  aboutIntroTitle,
  aboutDescription
}`;
