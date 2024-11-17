import styles from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faLocationDot,
  faLanguage,
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "@fontsource/roboto";
import { useState } from "react";

function NavLinks({ variant }) {
  return (
    <div>
      {variant === "header" && <HeaderNavlinks />}
      {variant === "navbar" && <NavbarNavlinks />}
    </div>
  );
}

export default NavLinks;

const HeaderNavlinks = () => {
  return (
    <div className={styles.headerlinksContainer}>
      <NavLink to="#login/signup-page" className={styles.navlink}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <p>Login / Sign Up</p>
      </NavLink>

      <NavLink to="#contact-page" className={styles.navlink}>
        <FontAwesomeIcon icon={faPhone} className={styles.icon} />
        <p>Contact Us</p>
      </NavLink>

      <NavLink to="#location-page" className={styles.navlink}>
        <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
        <p>Find Us</p>
      </NavLink>

      <NavLink to="#translated-page" className={styles.navlink}>
        <FontAwesomeIcon
          icon={faLanguage}
          className={`${styles.icon} ${styles.languageIcon}`}
        />
      </NavLink>
    </div>
  );
};

const NavbarNavlinks = () => {
  return (
    <div className={styles.navbarlinksContainer}>
      <div className={styles.leftSection}>
        <NavLink className={styles.navlink}>
          <p>Find a Car</p>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </NavLink>

        <button className={styles.navlink}>
          <p>How to Buy</p>
          <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
        </button>

        <button to="#sell-your-car-page" className={styles.navlink}>
          <p>Sell your Car</p>
          <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
        </button>

        <button to="#finance-and-insurance-page" className={styles.navlink}>
          <p>Finance & Insurance</p>
          <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
        </button>
      </div>

      <div className={styles.rightSection}>
        <button to="#auctions-page" className={styles.navlink}>
          <p>Auctions</p>
          <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
        </button>

        <button to="#services-and-info-page" className={styles.navlink}>
          <p>Services & Info</p>
          <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
        </button>

        <button to="#vehicles-sidebar" className={styles.navlink}>
          <p>Vehicles</p>
          <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
