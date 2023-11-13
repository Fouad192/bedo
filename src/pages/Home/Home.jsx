import React from "react";
import styles from "./Home.module.scss";
import Container from "../../components/Container/Container";
import { Link, useNavigate } from "react-router-dom";
import Profiles from "../../components/Profiles/Profiles";
import CallToAction from "../../components/CallToAction/CallToAction";
import Services from "../../components/Services/Services";
import Credentials from "../../components/Credentials/Credentials";

function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.homeContainer}>
      <div className={styles.row}>
        <div className={styles.bio} onClick={() => navigate("/about")}>
          <Container>
            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <img src="../../../public/picture.png" />
              </div>
            </div>
            <div className={styles.info}>
              <h4>Web Developer</h4>
              <h1>
                Abdelrahman <br /> ElAlfee.
              </h1>
              <p>I am a web developer based in Cairo.</p>
              <Link to="/about">
                <img src="../../../public/go.svg" />
              </Link>
            </div>
          </Container>
        </div>
        <div className={styles.column}>
          <div className={styles.banner}>
            <div className={styles.animation}>
              <div>
                <span>
                  LATEST WORK AND <b>FEATURED</b>{" "}
                  <img src="../../../public/star.svg" alt="Star" /> LATEST WORK
                  AND <b>FEATURED</b>{" "}
                  <img src="../../../public/star.svg" alt="Star" /> LATEST WORK
                  AND <b>FEATURED</b>{" "}
                  <img src="../../../public/star.svg" alt="Star" /> LATEST WORK
                  AND <b>FEATURED</b> LATEST WORK AND{" "}
                  <img src="../../../public/star.svg" alt="Star" /> LATEST WORK
                  AND <b>FEATURED</b> LATEST WORK AND{" "}
                  <img src="../../../public/star.svg" alt="Star" />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <Credentials />
            <div
              className={styles.projects}
              onClick={() => navigate("/projects")}
            >
              <Container>
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <img src="../../../public/works.png" />
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.infos}>
                    <h4>SHOWCASE</h4>
                    <h1>Projects</h1>
                  </div>
                  <Link>
                    <img src="../../../public/go.svg" />
                  </Link>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <Services />
        <Profiles />
      </div>
      <div className={styles.row}>
        <div className={styles.analytics}>
          <Container>
            <div className={styles.item}>
              <Container>
                <div>
                  <h1>07</h1>
                  <p>
                    YEARS <br /> EXPERIENCE
                  </p>
                </div>
              </Container>
            </div>
            <div className={styles.item}>
              <Container>
                <div>
                  <h1>07</h1>
                  <p>
                    YEARS <br /> EXPERIENCE
                  </p>
                </div>
              </Container>
            </div>
            <div className={styles.item}>
              <Container>
                <div>
                  <h1>07</h1>
                  <p>
                    YEARS <br /> EXPERIENCE
                  </p>
                </div>
              </Container>
            </div>
          </Container>
        </div>
        <CallToAction />
      </div>
    </div>
  );
}

export default Home;
