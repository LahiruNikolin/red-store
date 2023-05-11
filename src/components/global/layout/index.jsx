import React from "react";
import styles from "./layout.module.css";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.bodyContainer}>{children}</div>
    </div>
  );
};

export default Layout;
