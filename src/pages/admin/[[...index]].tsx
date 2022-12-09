import { NextStudio } from 'next-sanity/studio';
import { studioConfig } from '@/lib/sanity/sanity.config';

export default function StudioPage() {
  return <NextStudio config={studioConfig} />;
}
