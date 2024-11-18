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

        <DropdownMenu
          menu="financeAndInsurance"
          title="Finance & Insurance"
          icon={faAngleDown}
          dropdowns={dropdowns}
          toggleMenu={toggleMenu}
          links={[
            { to: "#opt 1", label: "Finance information" },
            { to: "#opt 2", label: "Finance FAQ" },
            { to: "#opt 3", label: "Apply Online for Finance" },
            { to: "#opt 4", label: "Apply Online for Business Finance" },
            { to: "#opt 5", label: "Car Insurance" },
          ]}
        />
      </div>

      <div className={styles.rightSection}>
        <DropdownMenu
          menu="auctions"
          title="Auctions"
          icon={faAngleDown}
          dropdowns={dropdowns}
          toggleMenu={toggleMenu}
          links={[
            { to: "#opt 1", label: "All car auctions" },
            { to: "#opt 2", label: "Whangarei" },
            { to: "#opt 3", label: "North West Auckland" },
            { to: "#opt 4", label: "Hamilton" },
            { to: "#opt 5", label: "Tauranga" },
          ]}
        />

        <DropdownMenu
          menu="servicesAndInfo"
          title="Services & Info"
          icon={faAngleDown}
          dropdowns={dropdowns}
          toggleMenu={toggleMenu}
          links={[
            { to: "#opt 1", label: "5 day Money Back Guarentee" },
            { to: "#opt 2", label: "Turners Group Overview" },
            { to: "#opt 3", label: "Terms & Conditions" },
          ]}
        />

        <DropdownMenu
          menu="vehicles"
          title="Vehicles"
          icon={faAngleDoubleDown}
          dropdowns={dropdowns}
          toggleMenu={toggleMenu}
          links={[
            { to: "#Cars-page", label: "Cars" },
            { to: "#Trucks & Machinery", label: "Trucks & Machinery" },
            { to: "#Damaged & End of Life", label: "Damaged & End of Life" },
            { to: "#Motorcycles", label: "Motorcycles" },
            { to: "#General Goods", label: "General Goods" },
            {
              to: "#Buses, Caravans & Motorhomes",
              label: "Buses, Caravans & Motorhomes",
            },
            { to: "#Boats & Marine", label: "Boats & Marine" },
          ]}
        />
      </div>
    </div>
  );
};

export default NavbarNavlinks;
