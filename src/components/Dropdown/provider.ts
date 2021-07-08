import React, { createContext, ReactNode, useState} from "react";

interface Option {

}

interface DropdownProviderProps {
  children: ReactNode;
}

interface OptionsContextData {
  options: Option[];
  createOption: (option) => Promise<void>;
}

const Context = createContext<OptionsContextData>(
  {} as OptionsContextData
);

export function DropdownProvider({ children }: DropdownProviderProps) {
  const [options, setOptions] = useState([]);
}