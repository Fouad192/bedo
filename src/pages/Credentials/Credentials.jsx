import React from "react";
import styles from "./Credentials.module.scss";
import Container from "../../components/Container/Container";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
function Credentials() {
  return (
    <div className={styles["container"]}>
      <div className={styles["personal-card"]}>
        <Container>
          <div className={styles["image"]}>
            <img src="../../../public/picture.png" />
          </div>
          <h2>Abdelrahman ElAlfee</h2>
          <p>@ElAlfee</p>
          <ul>
            <li>
              <Link>
                <Container>
                  <BsWhatsapp />
                </Container>
              </Link>
            </li>
            <li>
              <Link>
                <Container>
                  <BiLogoGmail />
                </Container>
              </Link>
            </li>
            <li>
              <Link>
                <Container>
                  <BsInstagram />
                </Container>
              </Link>
            </li>
          </ul>
          <button>Contact Me</button>
        </Container>
      </div>
      <div className={styles["info"]}>
        <div className={styles["about-me"]}>
          <h2>ABOUT ME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            voluptatibus unde eos quod doloribus nobis nulla adipisci non
            asperiores, ex modi sequi impedit! Neque dolorum ut temporibus
            veniam quae excepturi. Illum perferendis nihil maiores sequi
            reprehenderit voluptate iure error repellat, esse ex libero, eveniet
            officiis veritatis laudantium? Expedita labore distinctio molestias
            placeat itaque, sint, optio temporibus ea quas consequuntur quam?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A minus
            expedita repellat recusandae deleniti non maxime numquam optio,
            nesciunt consequatur vero nam consectetur, rem eaque eveniet! Quidem
            sit nulla hic!
          </p>
        </div>
        <div className={styles["experience"]}>
          <h2>EXPERIENCE</h2>
          <div>
            <h4>2007-2016</h4>
            <h3>Framer Motion & Developer</h3>
            <h5>Bluebase Designs</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              iure nostrum est porro voluptas sequi minus odit ex praesentium,
              eaque autem dolore deleniti pariatur nemo inventore maxime.
              Dolorum, similique mollitia! At, dolores quisquam fugit veniam
              corporis voluptates error illum cumque quis nulla ad quibusdam
              cupiditate nemo iure, accusantium reiciendis rem deleniti ex.
              Dolore nemo voluptates dolores quibusdam, quam quidem fugit?
            </p>
          </div>
          <div>
            <h4>2007-2016</h4>
            <h3>Framer Motion & Developer</h3>
            <h5>Bluebase Designs</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              iure nostrum est porro voluptas sequi minus odit ex praesentium,
              eaque autem dolore deleniti pariatur nemo inventore maxime.
              Dolorum, similique mollitia! At, dolores quisquam fugit veniam
              corporis voluptates error illum cumque quis nulla ad quibusdam
              cupiditate nemo iure, accusantium reiciendis rem deleniti ex.
              Dolore nemo voluptates dolores quibusdam, quam quidem fugit?
            </p>
          </div>
        </div>
        <div className={styles["education"]}>
          <h2>EDUCATION</h2>
          <div>
            <h4>2007-2016</h4>
            <h3>Framer Motion & Developer</h3>
            <h5>Bluebase Designs</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              iure nostrum est porro voluptas sequi minus odit ex praesentium,
              eaque autem dolore deleniti pariatur nemo inventore maxime.
              Dolorum, similique mollitia! At, dolores quisquam fugit veniam
              corporis voluptates error illum cumque quis nulla ad quibusdam
              cupiditate nemo iure, accusantium reiciendis rem deleniti ex.
              Dolore nemo voluptates dolores quibusdam, quam quidem fugit?
            </p>
          </div>
          <div>
            <h4>2007-2016</h4>
            <h3>Framer Motion & Developer</h3>
            <h5>Bluebase Designs</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              iure nostrum est porro voluptas sequi minus odit ex praesentium,
              eaque autem dolore deleniti pariatur nemo inventore maxime.
              Dolorum, similique mollitia! At, dolores quisquam fugit veniam
              corporis voluptates error illum cumque quis nulla ad quibusdam
              cupiditate nemo iure, accusantium reiciendis rem deleniti ex.
              Dolore nemo voluptates dolores quibusdam, quam quidem fugit?
            </p>
          </div>
        </div>
        <div className={styles["skills-container"]}>
          <h2>Skills</h2>
          <div className={styles["skills"]}>
            <div>
              <span>85%</span>
              <h3>Javascript</h3>
              <p>blabla</p>
            </div>
            <div>
              <span>85%</span>
              <h3>Javascript</h3>
              <p>blabla</p>
            </div>
            <div>
              <span>85%</span>
              <h3>Javascript</h3>
              <p>blabla</p>
            </div>
            <div>
              <span>85%</span>
              <h3>Javascript</h3>
              <p>blabla</p>
            </div>
            <div>
              <span>85%</span>
              <h3>Javascript</h3>
              <p>blabla</p>
            </div>
            <div>
              <span>85%</span>
              <h3>Javascript</h3>
              <p>blabla</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credentials;
