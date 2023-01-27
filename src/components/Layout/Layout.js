import React from 'react';
import Header from '../Header/Header';
import Head from 'next/head';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title> {title ? title + ' - Site Name' : 'Site Name'}</title>
        <meta rel="icon" content="E-commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  );
};

export default Layout;
