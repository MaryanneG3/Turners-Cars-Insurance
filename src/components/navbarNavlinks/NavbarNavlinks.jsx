import { useState } from "react";
import styles from "../navlinks/NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";

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

        <DropdownMenu
          menu="hotToBuy"
          title="How to Buy"
          icon={faAngleDown}
          dropdowns={dropdowns}
          toggleMenu={toggleMenu}
          links={[
            { to: "#opt 1", label: "View our Cars" },
            { to: "#opt 2", label: "Ways to Buy" },
            { to: "#opt 3", label: "Book a test drive" },
            { to: "#opt 4", label: "How to pay" },
            { to: "#opt 5", label: "FAQs about buying" },
            { to: "#opt 6", label: "Turners live" },
            { to: "#opt 7", label: "Website tools" },
          ]}
        />

        <DropdownMenu
          menu="sellYourCar"
          title="Sell your Car"
          icon={faAngleDown}
          dropdowns={dropdowns}
          toggleMenu={toggleMenu}
          links={[
            { to: "#opt 1", label: "Ways to sell" },
            { to: "#opt 2", label: "Book an appraisal" },
            { to: "#opt 3", label: "FAQs about selling" },
          ]}
        />

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
            <FontAwesomeIcon icon={faAngleDoubleDown} className={styles.icon} />
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

export default NavbarNavlinks;
