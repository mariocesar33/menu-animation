import { ReactElement } from "react";

import { NavBar } from "../NavBar";
import styles from "./styles.module.scss";

interface LayoutProps {
  children: ReactElement;
}

export function Layout({children}: LayoutProps) {
  return (
    <div className={styles.layoutContainers}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  );
}