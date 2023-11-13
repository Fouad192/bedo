import React from "react";
import styles from "./Contact.module.scss";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
function Contact() {
  return (
    <div className={styles["container"]}>
      <div className={styles["contact-infos"]}>
        <h3>CONTACT INFO</h3>
        <ul>
          <li>
            <div className={styles["icon-box"]}>
              <Container>
                <MdOutlineMailOutline />
              </Container>
            </div>
            <div className={styles["right"]}>
              <span>MAIL US</span>
              <h4>info@elalfee.com</h4>
              <h4>info@abdelrahman.com</h4>
            </div>
          </li>
          <li>
            <div className={styles["icon-box"]}>
              <Container>
                <IoIosCall />
              </Container>
            </div>
            <div className={styles["right"]}>
              <span>CONTACT US</span>
              <h4>info@elalfee.com</h4>
              <h4>info@abdelrahman.com</h4>
            </div>
          </li>
          <li>
            <div className={styles["icon-box"]}>
              <Container>
                <HiLocationMarker />
              </Container>
            </div>
            <div className={styles["right"]}>
              <span>LOCATION US</span>
              <h4>info@elalfee.com</h4>
              <h4>info@abdelrahman.com</h4>
            </div>
          </li>
        </ul>
        <h3>SOCIAL INFO</h3>
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
      </div>
      <div className={styles["contact-form"]}>
        <Container>
          <img src="../../../public/dangling.png" />
          <h1>
            Let's work <span>together.</span>
          </h1>
          <div className={styles["inputs"]}>
            <div className={styles["input-group"]}>
              <input type="text" placeholder="Name *" />
            </div>
            <div className={styles["input-group"]}>
              <input type="text" placeholder="Email *" />
            </div>
            <div className={styles["input-group"]}>
              <input type="text" placeholder="Subject *" />
            </div>
            <div className={styles["input-group"]}>
              <textarea type="text" placeholder="Your Message *" />
            </div>
            <div className={styles["input-group"]}>
              <button>Send Message</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
