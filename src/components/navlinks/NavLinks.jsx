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
  const [dropdowns, setDropdowns] = useState({
    howToBuy: false,
    sellYourCar: false,
    financeAndInsurance: false,
    auctions: false,
    servicesAndInfo: false,
    vehicles: false,
  });

  const toggleMenu = (menu) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className={styles.navbarlinksContainer}>
      <div className={styles.leftSection}>
        <NavLink className={styles.navlink}>
          <p>Find a Car</p>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </NavLink>

        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => {
            toggleMenu("howToBuy");
          }}
          onMouseLeave={() => {
            toggleMenu("howToBuy");
          }}
        >
          <button
            className={styles.navlink}
            aria-haspopup="true"
            aria-expanded={dropdowns.howToBuy}
          >
            <p>How to Buy</p>
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
          </button>

          {dropdowns.howToBuy && (
            <div className={styles.dropdownmenu}>
              <NavLink to="#opt 1">Option 1</NavLink>
              <NavLink to="#opt 2">Option 1</NavLink>
              <NavLink to="#opt 3">Option 1</NavLink>
            </div>
          )}
        </div>

        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => {
            toggleMenu("sellYourCar");
          }}
          onMouseLeave={() => {
            toggleMenu("sellYourCar");
          }}
        >
          <button
            className={styles.navlink}
            aria-haspopup="true"
            aria-expanded={dropdowns.howToBuy}
          >
            <p>Sell your Car</p>
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
          </button>
          {dropdowns.sellYourCar && (
            <div className={styles.dropdownmenu}>
              <NavLink to="#opt 1">Option 1</NavLink>
              <NavLink to="#opt 2">Option 1</NavLink>
              <NavLink to="#opt 3">Option 1</NavLink>
            </div>
          )}
        </div>

        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => {
            toggleMenu("financeAndInsurance");
          }}
          onMouseLeave={() => {
            toggleMenu("financeAndInsurance");
          }}
        >
          <button to="#finance-and-insurance-page" className={styles.navlink}>
            <p>Finance & Insurance</p>
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
          </button>
          {dropdowns.financeAndInsurance && (
            <div className={styles.dropdownmenu}>
              <NavLink to="#opt 1">Option 1</NavLink>
              <NavLink to="#opt 2">Option 1</NavLink>
              <NavLink to="#opt 3">Option 1</NavLink>
            </div>
          )}
        </div>
      </div>

      <div className={styles.rightSection}>
        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => {
            toggleMenu("auctions");
          }}
          onMouseLeave={() => {
            toggleMenu("auctions");
          }}
        >
          <button to="#auctions-page" className={styles.navlink}>
            <p>Auctions</p>
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
          </button>
          {dropdowns.auctions && (
            <div className={styles.dropdownmenu}>
              <NavLink to="#opt 1">Option 1</NavLink>
              <NavLink to="#opt 2">Option 1</NavLink>
              <NavLink to="#opt 3">Option 1</NavLink>
            </div>
          )}
        </div>

        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => {
            toggleMenu("servicesAndInfo");
          }}
          onMouseLeave={() => {
            toggleMenu("servicesAndInfo");
          }}
        >
          <button to="#services-and-info-page" className={styles.navlink}>
            <p>Services & Info</p>
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
          </button>
          {dropdowns.servicesAndInfo && (
            <div className={styles.dropdownmenu}>
              <NavLink to="#opt 1">Option 1</NavLink>
              <NavLink to="#opt 2">Option 1</NavLink>
              <NavLink to="#opt 3">Option 1</NavLink>
            </div>
          )}
        </div>

        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => {
            toggleMenu("vehicles");
          }}
          onMouseLeave={() => {
            toggleMenu("vehicles");
          }}
        >
          <button to="#vehicles-sidebar" className={styles.navlink}>
            <p>Vehicles</p>
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
          </button>
          {dropdowns.vehicles && (
            <div className={styles.dropdownmenu}>
              <NavLink to="#opt 1">Option 1</NavLink>
              <NavLink to="#opt 2">Option 1</NavLink>
              <NavLink to="#opt 3">Option 1</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
