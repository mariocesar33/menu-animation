import { ReactElement } from "react";

interface OptionProps {
  name: string;
  content: ReactElement;
}

export function Option({name, content}: OptionProps) {
  return (
    <button>{name}</button>
  );
}