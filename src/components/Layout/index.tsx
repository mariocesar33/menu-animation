import { NavBar } from "../NavBar";
import styles from "./styles.module.scss";

export function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.wrapper}>
        <NavBar />
      </div>
    </div>
  );
}