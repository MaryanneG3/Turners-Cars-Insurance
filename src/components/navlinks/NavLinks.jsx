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
        <NavLink to="#find-a-car-page" className={styles.navlink}>
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
              <NavLink to="#opt 1">View our Cars</NavLink>
              <NavLink to="#opt 2">Ways to Buy</NavLink>
              <NavLink to="#opt 3">Book a test drive</NavLink>
              <NavLink to="#opt 1">How to pay</NavLink>
              <NavLink to="#opt 2">FAQs about buying</NavLink>
              <NavLink to="#opt 3">Turners live</NavLink>
              <NavLink to="#opt 3">Website tools</NavLink>
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
              <NavLink to="#opt 1">Ways to sell</NavLink>
              <NavLink to="#opt 2">Book an appraisal</NavLink>
              <NavLink to="#opt 3">FAQs about selling</NavLink>
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
              <NavLink to="#opt 1">Finance information</NavLink>
              <NavLink to="#opt 2">Finance FAQ</NavLink>
              <NavLink to="#opt 3">Apply Online for Finance</NavLink>
              <NavLink to="#opt 3">Apply Online for Business Finance</NavLink>
              <NavLink to="#opt 3">Car Insurance</NavLink>
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
              <NavLink to="#opt 1">All car auctions</NavLink>
              <NavLink to="#opt 2">Whangarei</NavLink>
              <NavLink to="#opt 3">North West Auckland</NavLink>
              <NavLink to="#opt 1">Hamilton</NavLink>
              <NavLink to="#opt 2">Tauranga</NavLink>
              <NavLink to="#opt 3">Napier</NavLink>
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
              <NavLink to="#opt 1">5 day Money Back Guarentee</NavLink>
              <NavLink to="#opt 2">Turners Group Overview</NavLink>
              <NavLink to="#opt 3">Terms & Conditions</NavLink>
            </div>
          )}
        </div>

        <div
          className={styles.dropdownContainer}
          onClick={() => {
            toggleMenu("vehicles");
          }}
        >
          <button to="#vehicles-sidebar" className={styles.navlink}>
            <p>Vehicles</p>
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
          </button>
          {dropdowns.vehicles && (
            <div className={`${styles.dropdownmenu} ${styles.vehicleSideBar}`}>
              <NavLink to="#Cars-page">Cars</NavLink>
              <NavLink to="#Trucks & Machinery">Trucks & Machinery</NavLink>
              <NavLink to="#Damaged & End of Life">
                Damaged & End of Life
              </NavLink>
              <NavLink to="#Motorcycles">Motorcycles</NavLink>
              <NavLink to="#General Goods">General Goods</NavLink>
              <NavLink to="#Buses, Caravans & Motorhomes">
                Buses, Caravans & Motorhomes
              </NavLink>
              <NavLink to="#Boats & Marine">Boats & Marine</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
