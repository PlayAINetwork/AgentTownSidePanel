import { createContext, useContext, useMemo, useState } from "react";


interface AppContextType {
  showTipAgent: boolean;
  sectionType: string;
  setsTipAgent: React.Dispatch<React.SetStateAction<boolean>>;
  setSectionType: (sectionType: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [showTipAgent, setsTipAgent] = useState(false);
  const [sectionType, setSectionType] = useState("global");

  const value = useMemo(
    () => ({
      showTipAgent,
      sectionType,
      setsTipAgent,
      setSectionType,
    }),
    [showTipAgent, sectionType, setsTipAgent, setSectionType]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppCtx = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppCtx must be used within a AppContextProvider");
  }
  return context;
};
