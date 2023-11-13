import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className={styles["footer-area"]}>
      <div className={styles["container"]}>
        <div className={styles["footer-content"]}>
          <h1>ElAlfee</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
          <p>
            © All rights reserved by <span>WordPress River</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
