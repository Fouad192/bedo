import React from "react";
import styles from "./About.module.scss";
import Container from "../../components/Container/Container";
import Profiles from "../../components/Profiles/Profiles";
import CallToAction from "../../components/CallToAction/CallToAction";
import Credentials from "../../components/Credentials/Credentials";
function About() {
  return (
    <div className={styles["about"]}>
      <div className={styles["row"]}>
        <div className={styles["image"]}>
          <Container>
            <div className={styles["image-inner"]}>
              <img src="../../../public/picture.png" />
            </div>
          </Container>
        </div>
        <div className={styles["summary-container"]}>
          <div className={styles["text"]}>
            <img src="../../../public/star2.png" />
            <h1>SELF SUMMARY</h1>
            <img src="../../../public/star2.png" />
          </div>
          <div className={styles["summary"]}>
            <Container>
              <img src="../../../public/dangling.png" />
              <h1>Abdelrahman ElAlfee</h1>
              <p>
                I am a San francisco-based product designer with a focus on web
                design, illustration, a visual development. I have a diverse
                range of experience having worked across various fields and
                industries.
              </p>
            </Container>
          </div>
        </div>
      </div>
      <div className={styles["row"]}>
        <Container>
          <div className={styles["experience"]}>
            <h3>EXPERIENCE</h3>
            <ul>
              <li>
                <p className={styles["date"]}>2007 - 2017</p>
                <h2>Framer Designer & Developer</h2>
                <p className={styles["type"]}>Bluebase Designs</p>
              </li>
              <li>
                <p className={styles["date"]}>2007 - 2017</p>
                <h2>Framer Designer & Developer</h2>
                <p className={styles["type"]}>Bluebase Designs</p>
              </li>
            </ul>
          </div>
        </Container>
        <Container>
          <div className={styles["education"]}>
            <h3>EDUCATION</h3>
            <ul>
              <li>
                <p className={styles["date"]}>2007 - 2017</p>
                <h2>Framer Designer & Developer</h2>
                <p className={styles["type"]}>Bluebase Designs</p>
              </li>
              <li>
                <p className={styles["date"]}>2007 - 2017</p>
                <h2>Framer Designer & Developer</h2>
                <p className={styles["type"]}>Bluebase Designs</p>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className={styles["row-3"]}>
        <Profiles />
        <CallToAction />
        <Credentials />
      </div>
    </div>
  );
}

export default About;
