import Link from "next/link";
import styles from "../page.module.css"

const MainMenu = () => {
  return (
    <>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/about">
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
