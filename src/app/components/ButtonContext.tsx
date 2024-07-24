import React, { createContext, useContext, useState } from "react";

interface ButtonContextType {
  activeButton: string;
  setActiveButton: (button: string) => void;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export const ButtonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeButton, setActiveButton] = useState<string>("ABOUT YOU");

  return (
    <ButtonContext.Provider value={{ activeButton, setActiveButton }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  return context;
};
