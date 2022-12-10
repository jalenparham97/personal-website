import { createClient } from 'next-sanity';
import { studioConfig } from './sanity.config';

export const getClient = (preview: boolean) =>
  preview
    ? createClient({
        ...studioConfig,
        useCdn: false,
        // Fallback to using the WRITE token until https://www.sanity.io/docs/vercel-integration starts shipping a READ token.
        // As this client only exists on the server and the token is never shared with the browser, we don't risk escalating permissions to untrustworthy users
        token: process.env.SANITY_API_READ_TOKEN,
      })
    : createClient({ ...studioConfig, useCdn: true });

export function overlayDrafts(docs) {
  const documents = docs || [];
  const overlayed = documents.reduce((map, doc) => {
    if (!doc._id) {
      throw new Error('Ensure that `_id` is included in query projection');
    }

    const isDraft = doc._id.startsWith('drafts.');
    const id = isDraft ? doc._id.slice(7) : doc._id;
    return isDraft || !map.has(id) ? map.set(id, doc) : map;
  }, new Map());

  return Array.from(overlayed.values());
}
