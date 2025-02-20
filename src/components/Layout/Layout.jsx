import React from "react";
import Footer from "./Footer";
import Header from "./Header";
//import Navbar from "../../pages/abc";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
