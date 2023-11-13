import React from "react";
import styles from "./Projects.module.scss";
import Card from "../../components/Card/Card";
function Projects() {
  return (
    <div className={styles["container"]}>
      <div className={styles["row"]}>
        <div className={styles["left"]}>
          <Card />
          <Card />
        </div>
        <div className={styles["right"]}>
          <div className={styles["text"]}>
            <img src="../../../public/star2.png" />
            <h1>ALL PROJECTS</h1>
            <img src="../../../public/star2.png" />
          </div>
          <div className={styles["flex"]}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
