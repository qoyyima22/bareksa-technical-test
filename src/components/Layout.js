import React from 'react';
import Header from "./Header"
import SubHeader from "./SubHeader"
import styles from './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SubHeader />
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout