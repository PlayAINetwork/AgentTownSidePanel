import { createContext, useContext, useMemo, useState } from "react";

type TMessage = {
  name: string,
  message:string
}

interface AppContextType {
  showTipAgent: boolean;
  sectionType: string;
  selectedRevaiveItem:any;
  globalMessages:any
  setsTipAgent: React.Dispatch<React.SetStateAction<boolean>>;
  setSectionType: (sectionType: string) => void;
  setSelectedReviveItem:(selectedRevaiveItem: {}) => void;
  setGlobalMessages:(selectedRevaiveItem: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [showTipAgent, setsTipAgent] = useState(false);
  const [sectionType, setSectionType] = useState("global");
  const [selectedRevaiveItem, setSelectedReviveItem] = useState<any>({});
  const [globalMessages, setGlobalMessages] = useState<TMessage[]>([]);

  const value = useMemo(
    () => ({
      showTipAgent,
      sectionType,
      selectedRevaiveItem,
      globalMessages,
      setsTipAgent,
      setSectionType,
      setSelectedReviveItem,
      setGlobalMessages,
    }),
    [showTipAgent, sectionType,selectedRevaiveItem,globalMessages, setsTipAgent, setSectionType, setSelectedReviveItem,setGlobalMessages]
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
