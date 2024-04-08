import Navigation from "./Navigation";
import styles from "./Nav.module.css";

function Header() {
  return (
    <div className={styles.nav}>
      <Navigation />
    </div>
  );
}

export default Header;
