import React from 'react'
import styles from './Card.module.scss'
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
function Card({img, header = 'Header', subtitle = 'Subtitle', navigateTo = '/'}) {
  return (
    <div className={styles['card']}>
      <Container>
        <div className={styles['image']}>
          <img src={'../../../public/works.png'} />
        </div>
        <div className={styles['content']}>
          <div className={styles['infos']}>
            <h4>{header}</h4>
            <h1>{subtitle}</h1>
          </div>
          <Link to={navigateTo}>
            <img src="../../../public/go.svg" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Card