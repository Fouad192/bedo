import React from 'react'
import Container from '../Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Services.module.scss'
import { AiOutlineRise } from 'react-icons/ai';
function Services() {
  const navigate = useNavigate()
  return (
    <div className={styles.offerings} onClick={() => navigate("/services")}>
      <Container>
        <div className={styles.icons}>
          <div>
            <svg
              width="40px"
              height="40px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#fff"
            >
              <path
                d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
                stroke="#fff"
                stroke-width="1.5"
              ></path>
              <path
                d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
                stroke="#fff"
                stroke-width="1.5"
              ></path>
              <path
                d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
                stroke="#fff"
                stroke-width="1.5"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              width="40px"
              height="40px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#fff"
            >
              <path
                d="M4 15.5279V2.6C4 2.26863 4.26863 2 4.6 2H19.4C19.7314 2 20 2.26863 20 2.6V15.5279C20 17.043 19.144 18.428 17.7889 19.1056L12.2683 21.8658C12.0994 21.9503 11.9006 21.9503 11.7317 21.8658L6.21115 19.1056C4.85601 18.428 4 17.043 4 15.5279Z"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#fff"
            >
              <g clip-path="url(#clip0_2576_14436)">
                <path
                  d="M10.0503 10.6066L2.97923 17.6777C2.19818 18.4587 2.19818 19.725 2.97923 20.5061V20.5061C3.76027 21.2871 5.0266 21.2871 5.80765 20.5061L12.8787 13.435"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.0502 10.6066C9.20638 8.45358 9.37134 5.6286 11.1109 3.88909C12.8504 2.14957 16.0606 1.76777 17.8284 2.82843L14.7877 5.8691L14.5051 8.98014L17.6161 8.69753L20.6568 5.65685C21.7175 7.42462 21.3357 10.6349 19.5961 12.3744C17.8566 14.1139 15.0316 14.2789 12.8786 13.435"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2576_14436">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <AiOutlineRise />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.infos}>
            <h4>SPECIALIZATION</h4>
            <h1>Service Offering</h1>
          </div>
          <Link>
            <img src="../../../public/go.svg" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Services