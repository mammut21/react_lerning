import React, { createContext, useContext, useEffect, useState } from "react";


interface SortierenContextProps {
  anzahlBalken:number;
  setaAnzahlBalken:(a:number)=>void
}

const SortierenContext = createContext<SortierenContextProps>({
  anzahlBalken: 100,
  setaAnzahlBalken:()=>{},
});

export const SortierenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [anzahlBalkenState,setaAnzahlBalkenState]=useState(100)



  return (
    <SortierenContext.Provider value={{ anzahlBalken:anzahlBalkenState,setaAnzahlBalken:setaAnzahlBalkenState }}>
      {children}
    </SortierenContext.Provider>
  );
};

// Custom Hook to use the Socket context
export const useSortieren = () => useContext(SortierenContext);
