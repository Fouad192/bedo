import React from 'react'
import styles from './Profiles.module.scss'
import Container from '../Container/Container';
import { BsWhatsapp, BsInstagram} from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-router-dom';
function Profiles() {
  return (
    <div className={styles.socials}>
      <Container>
        <Container>
          <div className={styles.icons}>
            <div>
              <BsWhatsapp />
            </div>
            <div>
              <BiLogoGmail />
            </div>
            <div>
              <BsInstagram />
            </div>
          </div>
        </Container>
        <div className={styles.content}>
          <div className={styles.infos}>
            <h4>STAY WITH ME</h4>
            <h1>Profiles</h1>
          </div>
          <Link>
            <img src="../../../public/go.svg" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Profiles