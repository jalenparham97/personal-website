import React from 'react';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';

interface Props {
  children: React.ReactNode;
}

export function PageLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
