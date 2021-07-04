import { ReactElement } from "react";

type DropdownOptionProps = {
  children: ReactElement;
  name: string;
}

export function DropdownOption({name, children}: DropdownOptionProps) {
  return (
    <button>
      {children}
    </button>
  );
}