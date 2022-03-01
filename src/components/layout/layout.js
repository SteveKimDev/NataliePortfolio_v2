import * as React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

const Layout = ({ children }) => {
  return (
    <SSRProvider>
      <Header />
      <ParallaxProvider scrollAxis='vertical'>
        <main>{children}</main>
      </ParallaxProvider>
    </SSRProvider>
  );
};

export default Layout;
