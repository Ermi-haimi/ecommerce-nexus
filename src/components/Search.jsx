import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchItem, setSearchItem] = useState("");
  return (
    <SearchContext.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </SearchContext.Provider>
  );
}
