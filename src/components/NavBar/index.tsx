import { DropdownOption } from "../DropdownOption";
import styles from "./styles.module.scss";

export function NavBar() {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <DropdownOption name="Produtos">
            <h1>Produtos</h1>
          </DropdownOption>
        </li>
        <li>
          <DropdownOption name="Desenvolvedores">
            <h1>Produtos</h1>
          </DropdownOption>
        </li>
        <li>
          <DropdownOption name="Produtos">
            <h1>Produtos</h1>
          </DropdownOption>
        </li>
      </ul>
    </nav>
  );
}