import React from 'react';
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"

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