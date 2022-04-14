import React, { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
