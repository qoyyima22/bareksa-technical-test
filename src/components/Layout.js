import React from 'react';
import Header from "./Header"
import SubHeader from "./SubHeader"
import styles from './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SubHeader />
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout