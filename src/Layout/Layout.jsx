// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
   <Navbar/>
      <main >
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
