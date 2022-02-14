import React from "react";
import styles from "./Contact.module.scss";
import locationIcon from "../assects/address-icon.svg";
import phoneIcon from "../assects/phone-icon.svg";
import mailIcon from "../assects/mail-icon.svg";
import timerIcon from "../assects/timer-icon.svg";
function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactUsHeading}>
        <h3>Contact Us</h3>
      </div>
      <div className={styles.allContactRow}>
        <div className={styles.contactContainerRow}>
          <div className={styles.icon}>
            <img
              src={locationIcon}
              alt="address-icon"
              className={styles.icon}
            />
          </div>
          <span>Our Address</span>
          <p>25 Zilla Crt,</p>
          <p>Dandenong South VIC 3175</p>
        </div>
        <div className={styles.contactContainerRow}>
          <div className={styles.icon}>
            <img src={phoneIcon} alt="phone-icon" className={styles.icon} />
          </div>
          <span className="contact_title">Phone Us</span>
          <p>
            <a href="tel:1800 644 655">1800 644 655</a>
          </p>
        </div>

        <div className={styles.contactContainerRow}>
          <div className={styles.icon}>
            <img src={mailIcon} alt="" className={styles.icon} />
          </div>
          <span class="contact_title">Email Us</span>
          <p>
            <a class="reserve-button scroll-to trigger" href="#contact-us">
              Send us a Message
            </a>
          </p>
        </div>
        <div className={styles.contactContainerRow}>
          <div className={styles.icon}>
            <img src={timerIcon} alt="" className={styles.icon} />
          </div>
          <span class="contact_title">Trading Hours</span>
          <p>Mon-Fri</p>
          <p>7:00am – 4:30pm</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
