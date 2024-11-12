import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { useAccount } from "wagmi";
import { useDisconnect } from "@reown/appkit/react";

type TMessage = {
  name: string,
  message:string
}

interface AppContextType {
  showTipAgent: boolean;
  sectionType: string;
  token: string | null;
  selectedAgent: any
  selectedRevaiveItem:any;
  globalMessages:any
  amount:any
  disableAction:boolean;
  updateJwt: (token: string | null) => void;

  setsTipAgent: React.Dispatch<React.SetStateAction<boolean>>;
  setSectionType: (sectionType: string) => void;
  setSelectedReviveItem:(selectedRevaiveItem: {}) => void;
  setGlobalMessages:(selectedRevaiveItem: any) => void;
  disconnectUser: () => void;
  setSelectedAgent:(selectedAgent: any) => void;
  setAmount:(amount: any) => void;
  setDisableAction:(disableAction: boolean) => void;

}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [showTipAgent, setsTipAgent] = useState(false);
  const [sectionType, setSectionType] = useState("global");
  const [selectedRevaiveItem, setSelectedReviveItem] = useState<any>({});
  const [globalMessages, setGlobalMessages] = useState<TMessage[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const { isDisconnected } = useAccount();
  const { disconnect } = useDisconnect()
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [amount, setAmount] = useState<any>(null);
  const [disableAction, setDisableAction] = useState<boolean>(false);



  const updateJwt = (jwt: string | null) => {
    setToken(jwt);
  };
  const disconnectUser = () => {
    updateJwt(null);
    Cookies.remove("token"); // Set cookie to expire in 7 days
    disconnect();
  };
  useEffect(() => {
    if (isDisconnected) {
      disconnectUser();
    }
  }, [isDisconnected]);

  const value = useMemo(
    () => ({
      showTipAgent,
      token,
      sectionType,
      selectedRevaiveItem,
      globalMessages,
      selectedAgent,
      disableAction,
      amount,
      updateJwt,
      setsTipAgent,
      setSectionType,
      setSelectedReviveItem,
      setGlobalMessages,
      disconnectUser,
      setSelectedAgent,
      setAmount,
      setDisableAction
    }),
    [showTipAgent,disableAction,amount,selectedAgent,token, sectionType,selectedRevaiveItem,globalMessages,updateJwt, setAmount,setsTipAgent,setDisableAction, setSectionType,setSelectedAgent, setSelectedReviveItem,setGlobalMessages,disconnectUser]
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
