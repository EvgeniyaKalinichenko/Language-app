import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Navigation() {
  return (
    <div className={styles.links}>
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/abc.png"
        alt="abc"
        className={styles.img}
      />
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/cards_test" className={styles.link}>
        Cards Test
      </Link>
      <Link to="/cards" className={styles.link}>
        All Cards
      </Link>
    </div>
  );
}

export default Navigation;
