import * as React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';

import Header from './header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

const Layout = ({ children }) => {
  return (
    <SSRProvider>
      <Header />
      <main>{children}</main>
    </SSRProvider>
  );
};

export default Layout;
