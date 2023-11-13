import React from 'react'
import styles from './Credentials.module.scss'
import Container from '../Container/Container';
import { Link, useNavigate } from 'react-router-dom';
function Credentials() {
  const navigate = useNavigate()
  return (
    <div
      className={styles.credentials}
      onClick={() => navigate("/credentials")}
    >
      <Container>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img src="../../../public/signature.png" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.infos}>
            <h4>MORE ABOUT ME</h4>
            <h1>Credentials</h1>
          </div>
          <Link>
            <img src="../../../public/go.svg" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Credentials