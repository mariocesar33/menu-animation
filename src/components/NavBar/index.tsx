import { Products, Developers, Company } from "../Content";
import { DropdownOption } from "../DropdownOption";

import styles from "./styles.module.scss";

export function NavBar() {
  return (
    <div className={styles.dropdownStyles}>
      <nav className={styles.container}>
        <ul>
          <li>
            <DropdownOption name="Produtos">
              <Products />
            </DropdownOption>
          </li>
          <li>
            <DropdownOption name="Desenvolvedores">
              <Developers />
            </DropdownOption>
          </li>
          <li>
            <DropdownOption name="Empresa">
              <Company />
            </DropdownOption>
          </li>
        </ul>
      </nav>
    </div>
  );
}