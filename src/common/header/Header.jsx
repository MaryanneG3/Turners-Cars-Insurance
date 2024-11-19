import { NavLink } from "react-router-dom";
import NavLinks from "../../components/navlinks/NavLinks";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <NavLink to="/" className={styles.logoContainer}>
        <img src="./images/logo/logo.png" />
      </NavLink>

      <div className={styles.navlinks}>
        <NavLinks variant="header" />
      </div>
    </div>
  );
}

export default Header;
