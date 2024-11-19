import { useState } from "react";
import styles from "./VehicleSidebar.module.css";
import navlinkstyles from "../../components/navlinks/NavLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function VehicleSidebar({ isOpen }) {
  const links = [
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
  ];

  return (
    <div className={styles.sidebarContainer}>
      {isOpen && (
        <div className={styles.sidebarlinkscontainer}>
          {links.map((link, index) => (
            <NavLink key={index} to={link.to} className={styles.sidebarnavlink}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default VehicleSidebar;
