import React from 'react'
import Container from '../Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CallToAction.module.scss'
function CallToAction() {
  const navigate = useNavigate()
  return (
    <div className={styles.callToAction} onClick={() => navigate("/contact")}>
      <Container>
        <div>
          <img src="../../../public/dangling.png" />
          <h1>
            Let's <br /> work <span>together.</span>
          </h1>
          <Link>
            <img src="../../../public/go.svg" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default CallToAction