import { createContext } from "react";

type ValueContextType = {
  value: number | 0;
  setValue: (value: number) => void;
  val: string | "";
  setVal: (val: string) => void;
};

export const ValueContext = createContext<ValueContextType | any>("");

