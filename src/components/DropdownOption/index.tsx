import { ReactElement } from "react";

import styles from "../NavBar/styles.module.scss";

type DropdownOptionProps = {
  children: ReactElement;
  name: string;
}

export function DropdownOption({name, children}: DropdownOptionProps) {
  return (
    <button className={styles.dropdownOption}>
      {name}
    </button>
  );
}