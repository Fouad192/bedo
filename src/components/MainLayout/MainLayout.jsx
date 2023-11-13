import React from "react";
import styles from "./MainLayout.module.scss";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.navContainer}>
        <Navbar />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
